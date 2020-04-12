Rails.application.routes.draw do
  root to: "janken#rock"
  namespace :janken do
    get :rock
    get :scissors
    get :paper
  end

  resources :random_janken, only: [:index]
end
