Rails.application.routes.draw do
  root to: "janken#rock"
  resources :janken, only: [:all] do
    collection do
      get :rock
      get :scissors
      get :paper
    end
  end

  namespace :random_janken do
    get :rock
    get :scissors
    get :paper
    get :random
  end
end
