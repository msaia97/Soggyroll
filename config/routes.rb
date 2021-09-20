Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create] do
      resources :bookmarks, only: [:index, :destroy, :create]
    end
    resource :session, only: [:create, :destroy, :show]
    resources :animes, only: [:index, :show] do 
      resources :episodes, only: [:show, :index]
    end
    resources :navbar, only: :index
  end
  root 'static_pages#root'
end
