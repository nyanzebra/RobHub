require 'fabrication'
require 'faker'

Fabricator(:article) do
  title {Faker::Internet.user_name}
  author {Faker::Internet.safe_email}
  contents {Faker::Lorem.paragraph(2)}
end
