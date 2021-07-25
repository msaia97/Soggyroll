json.set! @anime.id do
    json.extract! @anime, :id, :title, :description
    json.cover_photo url_for(@anime.cover_photo) if @anime.cover_photo.attached?
end

json.episodes do 
    @anime.episodes.each do |ep|
        json.set! ep.id do 
            json.extract! ep, :id, :title, :description, :video_id
            json.photo url_for(ep.photo) if ep.photo.attached?
            json.video url_for(ep.video) if ep.video.attached?
        end
    end
end

