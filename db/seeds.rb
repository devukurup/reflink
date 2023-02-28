# frozen_string_literal: true

puts "####--------Seeding Data------------####"
User.create(
  email: "abc@example.com", first_name: "Sansa", last_name: "Stark", password: "welcome123",
  password_confirmation: "welcome123")
User.create(
  email: "John@example.com", first_name: "John", last_name: "Snow", password: "welcome123",
  password_confirmation: "welcome123")
puts "##-----Seeding done --------###"
