Rails.application.routes.draw do
  get 'card/new'
  get 'card/show'
  root to: 'products#index'

  resources :products, except: [:index]
    resources :mid_category, only: :new
    resources :small_category, only: :new

  devise_for :users, controllers: {
    registrations: 'users/registrations',
    sessions:      "users/sessions"
  }
  devise_scope :user do
    get '/users', to: redirect("/users/sign_up")
    get 'addresses', to: 'users/registrations#new_address'
    post 'addresses', to: 'users/registrations#create_address'
    get '/users/sign_out', to: 'devise/sessions#destroy'
  end

  resources :users, only: [:show, :index]do
    member do   
      get 'logout'
      get "card"
    end
  end  
  
  resources :users, only: [:new, :show]

  resources :products do
    resources :favorites , only: [:index, :create, :destroy]
  end
  get 'products/new/mid_category', to: 'products#mid_category'
  get 'products/new/small_category', to: 'products#small_category'

  resources :card, only: [:new, :show] do
    collection do
      post 'show', to: 'card#show'
      post 'pay', to: 'card#pay'
      post 'delete', to: 'card#delete'
    end
  end
end


