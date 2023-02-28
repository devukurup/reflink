# frozen_string_literal: true

class DeviseTokenAuthCreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table(:users) do |t|
      ## Required
      t.string :provider, null: false, default: "email"
      t.string :uid, null: false, default: ""

      ## Database authenticatable
      t.string :encrypted_password, null: false, default: ""

      ## Recoverable
      t.string :reset_password_token
      t.datetime :reset_password_sent_at
      t.boolean :allow_password_change, default: false

      ## User Info
      t.string :first_name
      t.string :last_name
      t.string :email

      ## Tokens
      t.text :tokens

      t.timestamps
    end

    add_index :users, :email, unique: true
    add_index :users, [:uid, :provider], unique: true
  end
end
