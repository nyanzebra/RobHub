class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.string :author
      t.text :message

      t.timestamps
      t.references :article, index: true, foreign_key: true
      t.references :project_file, index: true, foreign_key: true
    end
  end
end
