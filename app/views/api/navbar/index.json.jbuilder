json.animes do
    @animes.each do |anime|
        json.set! anime.id do
            json.extract! anime, :id, :title
        end
    end
end