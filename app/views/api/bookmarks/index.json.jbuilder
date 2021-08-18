arr = [];

@bookmarks.each do |bookmark|
    json.extract! bookmark, :id, :user_id, :anime_id, :episode_id
    arr.push(bookmark)
end

# json.extract! @user, :id
# #debugger
# json.bookmarks do 
#     @user.bookmarks.each do |bookmark|
#         json.extract! bookmark, :id, :user_id, :anime_id, :episode_id
#     end
# end


