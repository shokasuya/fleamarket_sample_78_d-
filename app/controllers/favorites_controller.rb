class FavoritesController < ApplicationController
  before_action :set_product, only: [:index, :create, :destroy]

  def index
    @favorites = Favorite.where(user_id: current_user.id)
  end

  def create
    @favorite = Favorite.create(user_id: current_user.id, product_id: @product.id)
  end

  def destroy
    @favorite = Favorite.find_by(user_id: current_user.id, product_id: @product.id)
    @favorite.destroy
  end

  private

  def set_product
    @product = Product.find(params[:product_id])
  end
end
