import * as APIUtil from '../util/bookmark_api_util';

export const RECEIVE_BOOKMARK = "RECEIVE_BOOKMARK";
export const RECEIVE_ALL_BOOKMARKS = 'RECEIVE_ALL_BOOKMARKS';
export const REMOVE_BOOKMARK = 'REMOVE_BOOKMARK';
export const BOOKMARK_ERROR = 'BOOKMARK_ERROR';

export const receiveBookmark = (bookmark) => ({
  // console.log(bookmark)
  // debugger
  type: RECEIVE_BOOKMARK,
  bookmark,
});

export const receiveAllBookmarks = (bookmarks) => {
  // console.log(bookmarks)
    return ({
      type: RECEIVE_ALL_BOOKMARKS,
      bookmarks
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

export const createAnimeBookmark = (userId, animeId ) => {
  animeId = animeId || null;

  let bmk = APIUtil.createAnimeBookmark(userId, animeId).then(bookmark => {
    // console.log(REEEEEEEE,bookmark)
  })
  // console.log(bmk)

  // episodeId = episodeId || null;
  // let bookmarks = APIUtil.createAnimeBookmark(userId, animeId);
  // bookmarks.then(bookmark => {
  //   console.log(bookmark)
  // })
  // debugger
  // return
    return APIUtil.createAnimeBookmark(userId, animeId).then((bookmark) => {
    // debugger
    return dispatch(receiveBookmark(bookmark))
  })
  // , (errors) => dispatch(bookmarkError(errors.responseJSON))
  // )

  // .catch((err) => dispatch(bookmarkError(err)))
  // let res = await APIUtil.createAnimeBookmark(userId, animeId)
  // dispatch(res)
};

export const createEpisodeBookmark = ({userId, animeId, episodeId}) => {
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
    .then((bookmarks) => dispatch(receiveAllBookmarks(bookmarks))))
}

export const getAnimeBookmark = (userId, animeId) => {
  return(APIUtil.getAnimeBookmark(userId, animeId)
    .then((bookmark) => dispatch(receiveBookmark(bookmark))))
}

export const getEpisodeBookmark = (userId, animeId, episodeId) => {
  return(APIUtil.getEpisodeBookmark(userId, animeId, episodeId)
    .then((bookmark) => dispatch(receiveBookmark(bookmark))))
}

export const deleteBookmark = (userId, bookmark) => {
  debugger
  return(APIUtil.deleteBookmark(userId, bookmark)
    .then((userId, bookmark) => dispatch(removeBookmark(userId, bookmark))
    ))
}