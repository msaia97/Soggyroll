import * as APIUtil from "../util/bookmark_api_util";

export const RECEIVE_BOOKMARK = "RECEIVE_BOOKMARK";
export const RECEIVE_ALL_BOOKMARKS = "RECEIVE_ALL_BOOKMARKS";
export const REMOVE_BOOKMARK = "REMOVE_BOOKMARK";
// export const BOOKMARK_ERROR = "BOOKMARK_ERROR";


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
      // debugger
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


// export const getBookmarks = (userId) => {
//   debugger
//   return APIUtil.fetchBookmarks(userId).then((bookmarks) => {
//     debugger
//     return dispatch(receiveAllBookmarks(bookmarks))
//   })
// }

const removeBookmark = (bookmark) => {
  return ({
    type: REMOVE_BOOKMARK,
    data: {bookmark}
  });
};

export const deleteBookmark = (bookmark) => {
  // debugger
  // console.log(userId, bookmark)
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

// const bookmarkError = (payload) => {
//   return ({
//     type: BOOKMARK_ERROR,
//     payload
//   });
// };

// thunk

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

export const createEpisodeBookmark = (userId, animeId, episodeId) => {
  debugger
  animeId = animeId || null;
  episodeId = episodeId || null;
  return $.ajax({
    method: "POST",
    url: `/api/users/${userId}/bookmarks`,
    data: {
      bookmark: {
        user_id: userId,
        anime_id: animeId,
        episode_id: episodeId,
      },
    },
    success: function(bookmark){
      debugger
      return dispatch(receiveBookmark(bookmark))
    }
  });
}

// export const getAnimeBookmark = (userId, animeId) => {
//   // debugger
//   return APIUtil.getAnimeBookmark(userId, animeId)
//     .then((bookmark) => {
//       // debugger;
//       return dispatch(receiveBookmark(bookmark));
//     })
//     .then((err) => dispatch(bookmarkError(err)));
// };

// export const getEpisodeBookmark = (userId, animeId, episodeId) => {
//   return APIUtil.getEpisodeBookmark(userId, animeId, episodeId).then(bookmark => {
//     return dispatch(receiveBookmark(bookmark))
//   })
// }

// export const deleteBookmark = (user, bookmark) => {
//   debugger
//   return APIUtil.deleteBookmark(user, bookmark).then((userId, bookmark) => {
//     return dispatch(removeBookmark(user, bookmark))
//   })
// }