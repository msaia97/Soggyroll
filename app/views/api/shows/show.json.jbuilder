# json.partial! 'api/shows/show', show: @show
json.array! @shows do |show|
    json.set! show.id
    json.extract! show, :id, :title, :description
    json.photoUrl url_for(show.cover_photo)
end