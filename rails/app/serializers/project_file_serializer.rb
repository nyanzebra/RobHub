class ProjectFileSerializer < ActiveModel::Serializer
  embed :ids, include: true
  attributes :id, :name, :contents, :language
  has_many :comments
  belongs_to :commit
end
