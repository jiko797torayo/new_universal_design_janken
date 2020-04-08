Rails.application.routes.draw do
  root to: "janken#rock"
  resources :janken, only: [:all] do
    collection do
      get :rock
      get :scissors
      get :paper
    end
  end
end
