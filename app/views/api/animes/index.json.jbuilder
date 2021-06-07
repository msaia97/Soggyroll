@animes.each do |anime|
    json.set! anime.id do 
        json.partial! 'anime',  anime: anime
    end
end 
