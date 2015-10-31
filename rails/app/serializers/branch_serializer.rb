class BranchSerializer < ActiveModel::Serializer
  embed :ids, include: true
  attributes :id, :name, :author
  has_many :commits
  belongs_to :project
end
