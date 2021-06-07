class ChangeShowToAnime < ActiveRecord::Migration[5.2]
  def change
    rename_table :shows, :animes
  end
end
