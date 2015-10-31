class CreateCommits < ActiveRecord::Migration
  def change
    create_table :commits do |t|
      t.belongs_to :branch, index: true
      t.string :author
      t.string :message
      t.integer :key

      t.timestamps
      t.references :branch, index: true, foreign_key: true
    end
  end
end
