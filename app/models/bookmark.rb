# == Schema Information
#
# Table name: bookmarks
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  episode_id :integer
#  anime_id   :integer
#

class Bookmark < ApplicationRecord
    belongs_to :user
    belongs_to :anime 
    # belongs_to :episode
end
