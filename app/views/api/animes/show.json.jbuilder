json.set! @anime.id do
    json.extract! @anime, :id, :title, :description
    json.cover_photo url_for(@anime.cover_photo) if @anime.cover_photo.attached?
end
