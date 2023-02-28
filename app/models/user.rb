# frozen_string_literal: true

class User < ActiveRecord::Base
  devise :invitable, :database_authenticatable, :registerable,
    :recoverable, :rememberable, :validatable
  include DeviseTokenAuth::Concerns::User

  def self.filter_invited_users
    User.where.not(invitation_created_at: nil)
  end

  def invitation_status
    if invitation_accepted_at
      return "accepted"
    end

    "pending"
  end
end
