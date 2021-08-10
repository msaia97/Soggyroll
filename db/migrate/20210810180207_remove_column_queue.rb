class RemoveColumnQueue < ActiveRecord::Migration[5.2]
  def change
    remove_column :queues, :episode_id
    remove_column :queues, :anime_id
    add_column :queues, :episode_id, :integer, index: true
    add_column :queues, :anime_id, :integer, index: true
  end
end
