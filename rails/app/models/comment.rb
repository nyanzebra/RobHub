class Comment < ActiveRecord::Base
	belongs_to :article
	belongs_to :project_file
end
