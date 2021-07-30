class EditEpisodes < ActiveRecord::Migration[5.2]
  def change
    add_column :episodes, :episode_num, :integer, index: true
  end
end
