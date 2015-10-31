class ArticleSerializer < ActiveModel::Serializer
  # embed :ids, include: true
  attributes :id, :author, :title, :contents
  has_many :comments
end
