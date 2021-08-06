class CreateQueue < ActiveRecord::Migration[5.2]
  def change
    create_table :queues do |t|
      t.integer :"user_id", null: false, index: true
      t.integer :"anime_id", null: false, index: true
      t.integer :"episode_id", null: false, index: true
    end
  end
end
