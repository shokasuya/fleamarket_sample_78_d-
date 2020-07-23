# README
## usersテーブル
|Column|Type|Options|
|------|----|-------|
|nickname|string| null:false|
|email|string| null:false, unique: true|
|password|string| null:false|
|password_conform|string| null:false|
|first_name|string|null:false|
|last_name|string|null:false|
|first_name_kana|string| null:false|
|last_name_kana|string| null:false|
|birthday|date| null:false|

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|nickname|string| null:false|
|email|string| null:false, unique: true|
|password|string| null:false|
|password_conform|string| null:false|
|first_name|string|null:false|
|last_name|string|null:false|
|first_name_kana|string| null:false|
|last_name_kana|string| null:false|
|birthday|date| null:false|

### Association
- has_one :address
- has_one :card
- has_many :products

## addressesテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null:false,foreign_key: true|
|postal_code|string|null: false|
|prefecture|string|null: false|
|city|string|null: false|
|block_number|string|null: false|
|apartment_name|string|

### Association
- belongs_to :user

## productsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string| null:false|
|description|text|null: false|
|price|integer| null:false|
|condition|integer| null:false|
|status|integer| null:false|
|brand|string|
|send_price|integer| null:false|
|category_id|integer| null:false, foreign_key: true|
|user|references|null:false, foreign_key: true|
|shipping_date|integer| null:false|
|prefecture|integer| null:false|
|size|string| null: false|

### Association
- belongs_to :user
- belongs_to :category
- has_many :images


## cardsテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|references| null:false, foreign_key: true|
|customer_id|string| null:false|
|card_id|string| null:false|

### Association
- belongs_to :user

## imagesテーブル
|Column|Type|Options|
|------|----|-------|
image|text|null: false|
product|references| null: false, foreign_key: true|

### Association
- belongs_to :product

## categoriesテーブル
|Column|Type|Options|
|------|----|-------|
name| string | null: false|
ancestry| string|

### Association
- has_many:products






# fleamarket_sample_78_d-

# Features
## user-registration
## credit-card-regiostration
## login
## product-listing
## edit-product-information
## product_details
## favorite-function

# fleamarket-copy


# DEMO
 
デモ動画や図解を載せる
 
# Requirement
 
* Rails 6.0.0
* Ruby 2.6.5
* gem 'pry-rails'
* gem 'capistrano'
* gem 'capistrano-rbenv'
* gem 'capistrano-bundler'
* gem 'capistrano-rails'
* gem 'capistrano3-unicorn'
* gem 'capistrano-rails-console'
* gem 'rspec-rails', '~> 4.0.0.beta2'
* gem 'rails-controller-testing'
* gem 'factory_bot_rails'
* gem 'faker'
 
 
# Usage
 
$ git clone https://github.com/shokasuya/fleamarket_sample_78_d-/pulls
$ cd fleamarket_sample_78_d-
$ bundle install
$ rails db:create
$ rails db:migrate
$ rails s

http://localhost:3000

 
# Note (注意)
 
## When adding images, only drag and drop can be added
 
# Author
 
* sho_kasuya
* 78-D-team
* E-mail s78.kasuya.sho@gmail.com
 











