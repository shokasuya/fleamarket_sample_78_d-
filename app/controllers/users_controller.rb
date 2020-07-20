class UsersController < ApplicationController
  before_action :set_user, only: [:show,:logout]
  before_action :set_product, only: [:show]
  def show
  end


  def logout
  end
 
  private

  def set_user
    @user = User.find(params[:id])
  end
  def user_params
    params.require(:user).permit(
      :nickname,
      :introduction,
    )
  end

  def set_product
    @product = Product.find_by(params[:id])
  end
end
