class Branch < ActiveRecord::Base
	belongs_to :project
	has_many :commits, dependent: :destroy
end
