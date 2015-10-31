require 'fabrication'
require 'faker'

Fabricator(:user) do
  name {Faker::Internet.user_name}
  email {Faker::Internet.safe_email}
  password {"password"}
  description {Faker::Lorem.paragraph(2)}
end
