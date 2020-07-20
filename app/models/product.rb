class Product < ApplicationRecord
  belongs_to :category
  belongs_to :user
  has_many :images, dependent: :destroy
  accepts_nested_attributes_for :images, allow_destroy: true
  has_many :favorites
  has_many :favorites, through: :favorites, source: :user

  enum condition:   { brand_new: 0, near_to_unused: 1, no_scrach: 2, slight_scrach: 3, has_scrach: 4, bad_state: 5 }
  enum status:      { display: 0, sold: 1 }
  enum send_price:  { listing_person: 0, buyer_burden: 1 }
  enum shipping_date:    { early_ship: 0, mid_ship: 1, late_ship: 2 }
  enum size:         { small: 0, middle: 1, large: 2 }

  with_options presence: true do
    validates :name
    validates :description
    validates :price
    validates :condition
    validates :status
    validates :send_price
    validates :shipping_date
    validates :prefecture_id
    validates :category_id
    validates :size
  end

  extend ActiveHash::Associations::ActiveRecordExtensions
  belongs_to_active_hash :prefecture
end
