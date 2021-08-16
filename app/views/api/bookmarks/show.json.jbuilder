json.extract! @user, :id
json.set! @user.id do
    json.extract! @bookmark, :id, :user_id, :anime_id, :episode_id
end
