if @bookmark.episode_id
    json.extract! @bookmark, :id, :user_id, :anime_id, :episode_id
else
    json.extract! @bookmark, :id, :user_id, :anime_id
end