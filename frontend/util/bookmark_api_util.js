export const getBookmarks = (user) => {
    return $.ajax({
      method: "GET",
      url: `/api/users/${user.id}/bookmarks`,
      data: { user },
    });
}

export const getAnimeBookmark = (userId, animeId) => {
  return $.ajax({
    method: "GET",
    url: `/api/users/${userId}/bookmarks`,
    data: {
      bookmark: {
        user_id: userId,
        anime_id: animeId
      },
    },
  });
}

export const getEpisodeBookmark = (userId, animeId, episodeId) => {
  return $.ajax({
    method: "GET",
    url: `/api/users/${userId}/bookmarks`,
    data: {
      bookmark: {
        user_id: userId,
        anime_id: animeId,
        episode_id: episodeId,
      },
    },
  });
}

export const deleteBookmark = (user, bookmark) => {
    return $.ajax({
      method: "DELETE",
      url: `/api/users/${user.id}/bookmarks/${bookmark.id}`,
      data: { user, bookmark },
    });
}

export const createAnimeBookmark = (userId, animeId) => {

  // console.log(animeId)
    return $.ajax({
      method: "POST",
      url: `/api/users/${userId}/bookmarks`,
      data: { 
        bookmark: {
          user_id: userId,
          anime_id: animeId
        } },
    });
}
export const createEpisodeBookmark = (userId, animeId, episodeId) => {
  // console.log(animeId)
    return $.ajax({
      method: "POST",
      url: `/api/users/${userId}/bookmarks`,
      data: { 
        bookmark: {
          user_id: userId,
          anime_id: animeId,
          episode_id: episodeId,
        } },
    });
}