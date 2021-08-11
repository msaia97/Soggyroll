class AddIndex < ActiveRecord::Migration[5.2]
  def change
    add_index :bookmarks, [:user_id, :episode_id, :anime_id]
  end
end
