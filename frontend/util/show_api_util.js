export const getShow = (show) => {
    return $.ajax({
        url: `/api/shows/${show.id}`,
        data: {show}
    })
};

export const getShows = (shows) => {
    return $.ajax({
        url: '/api/shows',
        data: {shows}
    })
}