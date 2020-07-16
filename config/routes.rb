Rails.application.routes.draw do
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

  resources :users, only: [:show]do
    member do   
      get 'logout'
    end
  end  

  
 


  resources :products do
    resources :favorites , only: [:index, :create, :destroy]
  end
  post '/products/:id/purchase',to: 'products#purchase'
  get 'products/new/mid_category', to: 'products#mid_category'
  get 'products/new/small_category', to: 'products#small_category'
 

  resources :products do
    member do
      post 'purchase'
      get 'buy'
      get 'purchased'
    end  
    get 'products/new/mid_category', to: 'products#mid_category'
    get 'products/new/small_category', to: 'products#small_category'
  end  
  
  resources :card, only: [:new, :show] do
    collection do
      post 'show', to: 'card#show'
      post 'pay', to: 'card#pay'
      post 'delete', to: 'card#delete'
    end
  end
end

