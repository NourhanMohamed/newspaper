Newspaper::Application.routes.draw do
  resources :news, only: [:index] do
    collection do
      get :sutweets
    end
  end
end
