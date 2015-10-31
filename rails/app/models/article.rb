class Article < ActiveRecord::Base
  validates :title, presence: true
  validates :author, presence: true
  validates :contents, presence: true
  has_many :comments, dependent: :destroy
end
