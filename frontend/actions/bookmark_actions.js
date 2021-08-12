import * as APIUtil from '../util/bookmark_api_util';

export const RECEIVE_BOOKMARK = "RECEIVE_BOOKMARK";
export const RECEIVE_BOOKMARKS = "RECEIVE_BOOKMARKS";
export const REMOVE_BOOKMARK = "REMOVE_BOOKMARK";

export const receiveBookmark = bookmark => {
  console.log(bookmark)
    return {
      type: RECEIVE_BOOKMARKS,
      bookmark
    };
}

export const receiveBookmarks = payload => {
    return {
      type: RECEIVE_BOOKMARKS,
      payload
    };
}

export const removeBookmark = (payload) => {
    return({
        type: REMOVE_BOOKMARK, 
        payload   
    })
}

// thunk

export const createBookmark = ({user, animeId}) => {
  console.log(user)
  // debugger
  return(APIUtil.createBookmark(user.id)
  .then((bookmark) => dispatch(receiveBookmark(bookmark))))
}

export const getBookmarks = (userId) => {
  return(APIUtil.getBookmarks(userId)
    .then((bookmarks) => dispatch(receiveBookmarks(bookmarks))))
}

export const getBookmark = (userId) => {
  return(APIUtil.getBookmark(userId)
    .then((user) => dispatch(receiveBookmark(user))))
}

export const deleteBookmark = (userId) => {
  return(APIUtil.deleteBookmark(userId)
    .then((userId) => dispatch(removeBookmark(userId))))
}