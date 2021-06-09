# json.partial! 'api/shows/show', show: @show
json.anime.id do
    json.partial! 'api/animes/anime', anime: @anime
    json.cover_photo url_for(anime.cover_photo)
end