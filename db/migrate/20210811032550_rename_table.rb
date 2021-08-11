class RenameTable < ActiveRecord::Migration[5.2]
  def change
    rename_table :queues, :bookmarks
  end
end
