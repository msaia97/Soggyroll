import * as APIUtil from '../util/bookmark_api_util';

export const RECEIVE_BOOKMARK = 'RECEIVE_BOOKMARK';
export const RECEIVE_BOOKMARKS = 'RECEIVE_BOOKMARKS';
export const REMOVE_BOOKMARK = 'REMOVE_BOOKMARK';
export const BOOKMARK_ERROR = 'BOOKMARK_ERROR';

export const receiveBookmark = bookmark => {
  console.log(bookmark)
  debugger
    return {
      type: RECEIVE_BOOKMARK,
      bookmark,
    };
}

export const receiveBookmarks = payload => {
    return ({
      type: RECEIVE_BOOKMARKS,
      payload
    });
}

export const removeBookmark = (payload) => {
    return({
        type: REMOVE_BOOKMARK, 
        payload   
    })
}

export const bookmarkError = (payload) => {
    return({
        type: BOOKMARK_ERROR, 
        payload   
    })
}

// thunk

export const createAnimeBookmark = (userId, animeId) => {
  animeId = animeId || null;
  // episodeId = episodeId || null;
  let bookmarks = APIUtil.createAnimeBookmark(userId, animeId);
  bookmarks.then(bookmark => {
    console.log(bookmark)

  })
  // debugger
  // return(APIUtil.createAnimeBookmark(userId, animeId)
  //   .then(
  //     (bookmark) => {
  //       // debugger
  //       dispatch(receiveBookmark(bookmark));
  //     })
  //   // .catch((err) => dispatch(bookmarkError(err)))
  //   )
}

export const createEpisodeBookmark = (userId, animeId, episodeId) => {
  animeId = animeId || null;
  episodeId = episodeId || null;
  return(APIUtil.createAnimeBookmark(userId, animeId)
    .then(
      (bookmark) => {
        dispatch(receiveBookmark(bookmark))
      })
    )
}

export const getBookmarks = (userId) => {
  return(APIUtil.getBookmarks(userId)
    .then((bookmarks) => dispatch(receiveBookmarks(bookmarks))))
}

export const getAnimeBookmark = (userId, animeId) => {
  return(APIUtil.getAnimeBookmark(userId, animeId)
    .then((bookmark) => dispatch(receiveBookmark(bookmark))))
}

export const getEpisodeBookmark = (userId, animeId, episodeId) => {
  return(APIUtil.getEpisodeBookmark(userId, animeId, episodeId)
    .then((bookmark) => dispatch(receiveBookmark(bookmark))))
}

export const deleteBookmark = (userId) => {
  return(APIUtil.deleteBookmark(userId)
    .then((userId) => dispatch(removeBookmark(userId))))
}