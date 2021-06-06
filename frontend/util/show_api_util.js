export const getShow = (showId) => {
    return $.ajax({
        url: `/api/shows/${showId}`,
    })
};

export const getShows = (shows) => {
    return $.ajax({
        url: '/api/shows',
        data: {shows}
    })
}