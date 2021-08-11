# @bookmarks.each do |bookmark|
#     json.set! bookmark.id do
#         json.extract! bookmark :id, :user_id, :anime_id, :episode_id
#     end
# end



json.extract! @user, :id
json.bookmarks do
    @user.bookmarks.each do |bookmark|
        json.set! bookmark.id do
            json.extract! bookmark, :id, :user_id, :anime_id, :episode_id
        end
    end
end