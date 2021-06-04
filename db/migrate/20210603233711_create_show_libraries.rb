class CreateShowLibraries < ActiveRecord::Migration[5.2]
  def change
    create_table :shows do |t|
      t.string :title, index: true, null: false
      t.text :description, null: false
      t.timestamps
    end
  end
end
