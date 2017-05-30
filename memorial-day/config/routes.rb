Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :activities, only: [:index, :create, :show]
    end
  end
  get '/activities', to: 'activities#index'
end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
