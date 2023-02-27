# frozen_string_literal: true

Rails.application.routes.draw do
  mount_devise_token_auth_for "User", at: "users"
  root "home#index"
  get "*path", to: "home#index", via: :all
end
