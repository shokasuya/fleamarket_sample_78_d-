class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  validates :nickname, :email, :first_name, :last_name, :first_name_kana, :last_name_kana, :birthday,  presence: true 
  validates :email, presence: true, uniqueness: true, format: { with: /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i }
  validates :password, presence: true, length: { minimum: 7 }, format: { with: /(?=.*\d+.*)(?=.*[a-zA-Z]+.*)./ }   
  has_one :address
  extend ActiveHash::Associations::ActiveRecordExtensions
  belongs_to_active_hash :prefecture

  has_many :favorites
  has_many :favorites, through: :favorites, source: :product
 
  has_many :cards
  has_many :products

  def favorited_by?(product_id)
    favorites.where(product_id: product_id).exists?
  end
end
