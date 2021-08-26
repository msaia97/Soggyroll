import * as APIUtil from "../util/bookmark_api_util";

export const RECEIVE_BOOKMARK = "RECEIVE_BOOKMARK";
export const RECEIVE_ALL_BOOKMARKS = "RECEIVE_ALL_BOOKMARKS";
export const REMOVE_BOOKMARK = "REMOVE_BOOKMARK";
export const BOOKMARK_ERROR = "BOOKMARK_ERROR";

export const receiveBookmark = (bookmark) => {
  return ({
    type: RECEIVE_BOOKMARK,
    bookmark
  });
};

export const receiveAllBookmarks = (bookmarks) => {
  return ({
    type: RECEIVE_ALL_BOOKMARKS,
    bookmarks
  });
};

export const removeBookmark = (payload) => {
  return ({
    type: REMOVE_BOOKMARK,
    payload
  });
};

export const bookmarkError = (payload) => {
  return ({
    type: BOOKMARK_ERROR,
    payload
  });
};

// thunk

export const createAnimeBookmark = (userId, animeId) => {
  animeId = animeId || null;
  return APIUtil.createAnimeBookmark(userId, animeId)
    .then(bookmark => {
      return dispatch(receiveBookmark(bookmark))
    })
}

export const createEpisodeBookmark = ({ userId, animeId, episodeId }) => {
  animeId = animeId || null;
  episodeId = episodeId || null;
  return APIUtil.createAnimeBookmark(userId, animeId).then((bookmark) => {
   return  dispatch(receiveBookmark(bookmark));
  });
};

export const getBookmarks = (userId) => {
  return APIUtil.getBookmarks(userId).then((bookmarks) => {
    return dispatch(receiveAllBookmarks(bookmarks))
  })
}

export const getAnimeBookmark = (userId, animeId) => {
  return APIUtil.getAnimeBookmark(userId, animeId).then(bookmark => {
    return dispatch(receiveBookmark(bookmark))
  });
};

export const getEpisodeBookmark = (userId, animeId, episodeId) => {
  return APIUtil.getEpisodeBookmark(userId, animeId, episodeId).then(bookmark => {
    return dispatch(receiveBookmark(bookmark))
  })
}

export const deleteBookmark = (userId, bookmark) => {
  return APIUtil.deleteBookmark(userId, bookmark).then((userId, bookmark) => {
    return dispatch(removeBookmark(userId, bookmark))
  })
}