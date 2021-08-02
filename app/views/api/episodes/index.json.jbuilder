json.animeId anime.animeId 
json.array!(@episodes) do |json, episode|
    json.anime episode.anime
end

json.set! @animeId do
    @episodes.each do |episode|
        json.set! @episode.id do
            json.extract! @episode, :id, :title, :description, :video_id, :episode_num
            json.photo url_for(episode.photo) if episode.photo.attatched?
            json.video url_for(episode.video) if episode.video.attatched?
        end
    end
end

