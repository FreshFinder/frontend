Frontend::Application.routes.draw do

  root 'markets#index'

  resources "markets", only: [:show, :index] do
    resources "reviews", only: [:create]
  end
end
