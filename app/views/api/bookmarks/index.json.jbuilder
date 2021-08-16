json.extract! @user, :id
#debugger
json.bookmarks do 
    @user.bookmarks.each do |bookmark|
        json.extract! bookmark, :id, :user_id, :anime_id, :episode_id
    end
end


# @bookmarks.each do |bookmark|
#     json.set! bookmark.id do
#         json.extract! bookmark :id, :user_id, :anime_id, :episode_id
#     end
# end

# @animes.each do |anime|
#     json.set! anime.id do 
#         json.partial! 'anime',  anime: anime
#         json.cover_photo url_for(anime.cover_photo) if anime.cover_photo.attached?
#     end
# end 


# json.set! @animeId do
#     @episodes.each do |episode|
#         json.set! @episode.id do
#             json.extract! @episode, :id, :title, :description, :video_id, :episode_num
#             json.photo url_for(episode.photo) if episode.photo.attatched?
#             json.video url_for(episode.video) if episode.video.attatched?
#         end
#     end
# end

# json.extract! @user, :id
# json.bookmarks do
#     @user.bookmarks.each do |bookmark|
#         json.set! bookmark.id do
#             json.extract! bookmark, :id, :user_id, :anime_id, :episode_id
#         end
#     end
# end