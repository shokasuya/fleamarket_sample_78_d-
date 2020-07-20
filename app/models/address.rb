class Address < ApplicationRecord
  validates :postal_code, format: {with: (/\A\d{7}\z/)}

  validates  :postal_code, :prefecture, :city, :block_number, presence: true
  belongs_to :user, optional: true
  belongs_to :prefecture
end
