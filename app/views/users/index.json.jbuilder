# frozen_string_literal: true

json.users @users do |user|
  json.extract! user, :id, :email
  json.invitation_status user.invitation_status
end
