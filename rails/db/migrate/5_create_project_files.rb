class CreateProjectFiles < ActiveRecord::Migration
  def change
    create_table :project_files do |t|
      t.string :name
      t.text :contents
      t.string :language

      t.timestamps
      t.references :commit, index: true,foreign_key: true
    end
  end
end
