json.set! @episode.id do 
    json.extract! @episode, :id, :title, :description, :video_id
    json.photo url_for(episode.photo) if episode.photo.attatched?
    json.video url_for(episode.video) if episode.video.attatched?
end