@animes.each do |anime|
    json.set! anime.id do 
        json.partial! 'anime',  anime: anime
    end
    json.photoUrl url_for(anime.cover_photo)
end 
