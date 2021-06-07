export const getShow = (showId) => {
    return $.ajax({
        url: `/api/shows/${showId}`,
    })
};

export const getShows = () => {
    return $.ajax({
        url: '/api/shows'
    })
}