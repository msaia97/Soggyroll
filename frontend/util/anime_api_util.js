export const getAnime = (animeId) => {
    return $.ajax({
        url: `/api/animes/${animeId}`,
    })
};

export const getAnimes = () => {
    return $.ajax({
        url: '/api/animes'
    })
}