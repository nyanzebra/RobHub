class CommentSerializer < ActiveModel::Serializer
  embed :ids, include: true
  attributes :id, :author, :message  
  belongs_to :article
  belongs_to :project_file
end
