# frozen_string_literal: true

module InvitableMethods
  extend ActiveSupport::Concern

  def resource_from_invitation_token
    @user = User.find_by_invitation_token(params[:invitation_token], true)
    return if params[:invitation_token] && @user

    render status: :unprocessable_entity, json: { error: ["Invalid invitation token."] }
  end
end
