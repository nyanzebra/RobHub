class ProjectSerializer < ActiveModel::Serializer
  embed :ids, include: true
  attributes :id, :author, :name, :description, :language
  has_many :branches
  belongs_to :user
end
