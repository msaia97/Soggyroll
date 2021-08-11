export const getBookmarks = (user) => {
    return $.ajax({
      method: "GET",
      url: `/api/users/${user.id}/bookmarks`,
      data: { user },
    });
}

export const deleteBookmark = (user, bookmark) => {
    $.ajax({
      method: "DELETE",
      url: `/api/users/${user.id}/bookmarks/${bookmark.id}`,
      data: { user, bookmark },
    });
}

export const createBookmark = (userId) => {

  console
    $.ajax({
      method: "POST",
      url: `/api/users/${userId}/bookmarks`,
      data: { 
        bookmark: {
          user_id: userId,
          anime_id: null,
          episode_id: null,
        } },
    });
}