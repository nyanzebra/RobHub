# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 6) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "articles", force: true do |t|
    t.string   "title"
    t.string   "author"
    t.text     "contents"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "branches", force: true do |t|
    t.integer  "project_id"
    t.string   "name"
    t.string   "author"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "branches", ["project_id"], name: "index_branches_on_project_id", using: :btree

  create_table "comments", force: true do |t|
    t.string   "author"
    t.text     "message"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "article_id"
    t.integer  "project_file_id"
  end

  add_index "comments", ["article_id"], name: "index_comments_on_article_id", using: :btree
  add_index "comments", ["project_file_id"], name: "index_comments_on_project_file_id", using: :btree

  create_table "commits", force: true do |t|
    t.integer  "branch_id"
    t.string   "author"
    t.string   "message"
    t.integer  "key"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "commits", ["branch_id"], name: "index_commits_on_branch_id", using: :btree

  create_table "project_files", force: true do |t|
    t.string   "name"
    t.text     "contents"
    t.string   "language"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "commit_id"
  end

  add_index "project_files", ["commit_id"], name: "index_project_files_on_commit_id", using: :btree

  create_table "projects", force: true do |t|
    t.string   "name"
    t.string   "author"
    t.string   "language"
    t.text     "description"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
