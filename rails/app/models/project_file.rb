class ProjectFile < ActiveRecord::Base
	has_many :comments, dependent: :destroy
	belongs_to :commit
end
