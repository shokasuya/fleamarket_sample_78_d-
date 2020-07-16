class ProductsController < ApplicationController
  require 'payjp'
  before_action :set_product, except: [:index, :new, :create, :mid_category, :small_category, :buy, :purchase]
  before_action :set_product_purchase, only: [:buy, :purchase]
  before_action :set_categories, only: [:edit, :update]
  def index
    @product = Product.new
    @product.images.new
    @newProducts = Product.includes(:images).where(status: 0).order("RAND()").limit(4)
    @brandProducts = Product.includes(:images).where(status: 0).order("id DESC").limit(4)
    @soldProducts = Product.includes(:images).where(status: 1).order("id DESC").limit(4)
  end
  
  def new
    @parent = Category.where(ancestry: nil)
    if user_signed_in?
      @product = Product.new
      @product.images.new
      @parent = Category.where(ancestry: nil)
    else
      redirect_to root_path
    end
  end

  def create
    @product = Product.new(product_params)
    if params[:product][:images_attributes] && @product.save
      redirect_to root_path
    else
      redirect_to root_path
    end
  end

  def show
  end


  

  def buy
    @address = Address.find_by(user_id: current_user.id)
  end


  def update

    if @product.update(product_params)
      redirect_to root_path
    else
      render :edit
    end
  end

  def destroy
    if @product.destroy
      redirect_to root_path
    else
      render :show
    end
  end

  def mid_category
    @mid_categories = Category.where(ancestry: params[:big_category_id])
    render json: @mid_categories
  end

  def small_category
    @small_categories = Category.where(ancestry: "#{params[:big_category_id]}/#{params[:mid_category_id]}")
    render json: @small_categories
  end


  def purchase
    Payjp.api_key = Rails.application.credentials.PAYJP_SECRET_KEY
    if Payjp::Charge.create(
      amount: @product.price, # 決済する値段
      card: params['payjp-token'], # フォームを送信すると作成・送信されてくるトークン
      currency: 'jpy'
    )
    @product.update(status: 1)
    redirect_to root_path
  else 
    flash[:notice] = "payjp以外が原因でクレジットカードでの支払いに失敗しました。"
    render :show
    end
  end


  private
  def product_params
    params.require(:product).permit(:name, :price, :description, :size, :brand, :status, :condition, :send_price, 
                                    :shipping_date, images_attributes: [:image])
                            .merge(user_id: current_user.id, category_id: params[:product][:category_id],
                              prefecture_id: params[:product][:prefecture], status: 0)
  end

  def set_product
    @product = Product.find(params[:id])
  end

  def set_product_purchase
    @product = Product.find(params[:id])
  end

  def set_categories
    @categories = Category.where(ancestry: nil)
  end



end
