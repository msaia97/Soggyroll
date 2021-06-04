# == Schema Information
#
# Table name: shows
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  description :text             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Show < ApplicationRecord
    validates :title, presence: true, uniqueness: true
    validates :description, presence: true

    # associations with queue and episodes

end
