# frozen_string_literal: true

class UsersController < ApplicationController
  before_action :load_user, only: :show

  def index
    @users = User.filter_invited_users
  end

  def show
    render
  end

  private

    def load_user
      @user = User.find_by(id: params[:id])
      unless @user
        render status: :not_found, json: { error: "User not found" }
      end
    end
end
