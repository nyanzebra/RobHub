class CommitSerializer < ActiveModel::Serializer
  embed :ids, include: true
  attributes :id, :message, :key, :author
  has_many :project_files
  belongs_to :branch
end
