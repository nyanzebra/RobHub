class Commit < ActiveRecord::Base
	belongs_to :branch
	has_many :project_files, dependent: :destroy
end
