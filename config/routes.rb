Newspaper::Application.routes.draw do
  resources :news, only: [:index] do
  end
end
