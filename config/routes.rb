Frontend::Application.routes.draw do

  root 'markets#index'

  resources "markets", only: [:show, :index]
end
