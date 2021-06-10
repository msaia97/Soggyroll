# == Schema Information
#
# Table name: episodes
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  description :string           not null
#  video_id    :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Episode < ApplicationRecord
    validates :title, presence: true, uniqueness: true
    validates :description, presence: true
    
    # associations
    has_one_attached :photo 
    has_one_attached :video 

    belongs_to :anime,
        foreign_key: :video_id,
        class_name: 'Anime'

end
