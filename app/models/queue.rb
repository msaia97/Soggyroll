#  create_table "queues", force: :cascade do |t|
#     t.integer "user_id", null: false
#     t.integer "anime_id", null: false
#     t.integer "episode_id", null: false
#     t.index ["anime_id"], name: "index_queues_on_anime_id"
#     t.index ["episode_id"], name: "index_queues_on_episode_id"
#     t.index ["user_id"], name: "index_queues_on_user_id"
#   end

class Queue < ApplicationRecord
    belongs_to :user
    belongs_to :anime 
    belongs_to :episode
end