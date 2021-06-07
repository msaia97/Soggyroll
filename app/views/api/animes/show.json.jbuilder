# json.partial! 'api/shows/show', show: @show
json.array! @animes do |anime|
    json.set! anime.id
    json.extract! anime, :id, :title, :description
    json.photoUrl url_for(anime.cover_photo)
end