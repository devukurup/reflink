# frozen_string_literal: true

class Users::InvitationsController < Devise::InvitationsController
  include InvitableMethods
  before_action :resource_from_invitation_token, only: [:edit, :update]
  before_action :load_user, only: :create

  def create
    unless is_existing_user
      User.invite!(invite_params, current_user)
      render status: :ok, json: { notice: "Successfully invited the user." }
    end
  end

  def edit
    redirect_to "/invitations/accept?invitation_token=#{params[:invitation_token]}"
  end

  def update
    @user = User.accept_invitation!(accept_invitation_params)
    if @user.errors.empty?
      render status: :ok, json: { notice: "User Succesfully signed in." }
    else
      render status: :unprocessable_entity, json: { error: @user.errors.to_json }
    end
  end

  private

    def invite_params
      params.permit(:first_name, :last_name, :email, :invitation_token, :skip_invitation)
    end

    def accept_invitation_params
      params.permit(:password, :password_confirmation, :invitation_token, :first_name, :last_name)
    end

    def load_user
      @user = User.where(email: invite_params[:email])
    end

    def is_existing_user
      if @user.exists?
        render status: :unprocessable_entity, json: { error: "User already exists." }
      end
    end
end
