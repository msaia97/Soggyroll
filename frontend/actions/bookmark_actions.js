
export const RECEIVE_BOOKMARK = "RECEIVE_BOOKMARK";
export const RECEIVE_ALL_BOOKMARKS = "RECEIVE_ALL_BOOKMARKS";
export const REMOVE_BOOKMARK = "REMOVE_BOOKMARK";


const receiveAllBookmarks = (bookmarks) => {
  return ({
    type: RECEIVE_ALL_BOOKMARKS,
    bookmarks
  });
};

export const getBookmarks = (userId) => {
  return $.ajax({
    type: "GET",
    url: `/api/users/${userId}/bookmarks`,
    data: { userId },
    success: function (bookmarks){
      return dispatch(receiveAllBookmarks(bookmarks));
    }
  })
}

const receiveBookmark = (bookmark) => {
  return ({
    type: RECEIVE_BOOKMARK,
    bookmark
  });
};

export const getAnimeBookmark = (userId, animeId) => {
  return $.ajax({
    method: "GET",
    url: `/api/users/${userId}/bookmarks`,
    data: {
      bookmark: {
        user_id: userId,
        anime_id: animeId,
      },
    },
  }).then((bookmark) => {
    return dispatch ({
      type: RECEIVE_BOOKMARK,
      bookmark
    });
  })
}

const removeBookmark = (bookmark) => {
  return ({
    type: REMOVE_BOOKMARK,
    data: {bookmark}
  });
};

export const deleteBookmark = (bookmark) => {
  return $.ajax({
    type: "DELETE",
    url: `/api/users/${bookmark.user_id}/bookmarks/${bookmark.id}`,
    data: { bookmark },
    success: function (bookmark){
      // debugger
      return dispatch(removeBookmark(bookmark))
    }
  });
}

export const createAnimeBookmark = (userId, animeId) => {
  animeId = animeId || null;
  return $.ajax({
    method: "POST",
    url: `/api/users/${userId}/bookmarks`,
    data: {
      bookmark: {
        user_id: userId,
        anime_id: animeId,
      },
    },
    success: function(bookmark){
      return dispatch(receiveBookmark(bookmark))
    }
  })
}

// export const createEpisodeBookmark = (userId, animeId, episodeId) => {
//   animeId = animeId || null;
//   episodeId = episodeId || null;
//   return $.ajax({
//     method: "POST",
//     url: `/api/users/${userId}/bookmarks`,
//     data: {
//       bookmark: {
//         user_id: userId,
//         anime_id: animeId,
//         episode_id: episodeId,
//       },
//     },
//     success: function(bookmark){
//       return dispatch(receiveBookmark(bookmark))
//     }
//   });
// }
