class CreateBranches < ActiveRecord::Migration
  def change
    create_table :branches do |t|
      t.belongs_to :project, index: true
      t.string :name
      t.string :author

      t.timestamps
      t.references :project, index: true, foreign_key: true
    end
  end
end
