export const getEpisode = (animeId, episodeId) => {
    return $.ajax({
        url: `/api/anime/${animeId}/${episodeId}`
    })
}

export const getEpisodes = (animeId) => {
    return $.ajax({
        url: `/api/animes/${animeId}/`
    })
}

// export const fetchEpisodes = (animeId) => {
//     debugger
//     return $.ajax({
//       url: `/api/animes/${animeId}/episodes`,
//     //   /api/users/:user_id/bookmarks
//     });
// }

