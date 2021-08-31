import * as APIUtil from "../util/bookmark_api_util";

// export const RECEIVE_BOOKMARK = "RECEIVE_BOOKMARK";
export const RECEIVE_ALL_BOOKMARKS = "RECEIVE_ALL_BOOKMARKS";
// export const REMOVE_BOOKMARK = "REMOVE_BOOKMARK";
// export const BOOKMARK_ERROR = "BOOKMARK_ERROR";

// const receiveBookmark = (bookmark) => {
//   return ({
//     type: RECEIVE_BOOKMARK,
//     bookmark
//   });
// };

const receiveAllBookmarks = (bookmarks) => {
  debugger
  return ({
    type: RECEIVE_ALL_BOOKMARKS,
    bookmarks
  });
};

export const getBookmarks = (userId) => {
  debugger
  return $.ajax({
    type: "GET",
    url: `/api/users/${userId}/bookmarks`,
    data: { userId },
    success: function (bookmarks){
      debugger
      return dispatch(receiveAllBookmarks(bookmarks));
    }
  })
  // .then((bookmarks) => {
  //   // console.log(bookmarks)
  //   debugger
  //   return {
  //     type: RECEIVE_ALL_BOOKMARKS,
  //           bookmarks
  //   };
  // })
}

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

// const removeBookmark = (payload) => {
//   return ({
//     type: REMOVE_BOOKMARK,
//     payload
//   });
// };

// const bookmarkError = (payload) => {
//   return ({
//     type: BOOKMARK_ERROR,
//     payload
//   });
// };

// thunk

// export const createAnimeBookmark = (userId, animeId) => {
//   animeId = animeId || null;
//   return APIUtil.createAnimeBookmark(userId, animeId)
//     .then(bookmark => {
//       return dispatch(receiveBookmark(bookmark))
//     })
// }

// export const createEpisodeBookmark = ({ userId, animeId, episodeId }) => {
//   animeId = animeId || null;
//   episodeId = episodeId || null;
//   return APIUtil.createAnimeBookmark(userId, animeId).then((bookmark) => {
//    return  dispatch(receiveBookmark(bookmark));
//   });
// };


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

// export const deleteBookmark = (userId, bookmark) => {
//   return APIUtil.deleteBookmark(userId, bookmark).then((userId, bookmark) => {
//     return dispatch(removeBookmark(userId, bookmark))
//   })
// }