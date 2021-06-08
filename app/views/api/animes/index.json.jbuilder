@animes.each do |anime|
    json.set! anime.id do 
        json.partial! 'anime',  anime: anime
        json.cover_photo url_for(anime.cover_photo) if anime.cover_photo.attached?
    end
end 
