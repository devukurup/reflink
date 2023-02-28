# frozen_string_literal: true

Rails.application.routes.draw do
  mount_devise_token_auth_for "User", at: "users", skip: [:invitations]

  devise_for :users, path: "users", only: :invitations, controllers: { invitations: "users/invitations" }

  defaults format: :json do
    resources :users, only: %i[index show]
  end

  root "home#index"
  get "*path", to: "home#index", via: :all
end
