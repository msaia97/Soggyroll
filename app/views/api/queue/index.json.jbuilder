@queues.each do |queue|
    json.set! queue.id do
        json.extract! queue :id, :user_id, :anime_id, :episode_id
    end
end