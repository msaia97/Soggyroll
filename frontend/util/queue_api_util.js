export const getQueues = (user) => {
    return $.ajax({
      method: "GET",
      url: `/api/users/${user.id}/queues`,
      data: { user },
    });
}

export const deleteQueue = (user, queue) => {
    $.ajax({
      method: "DELETE",
      url: `/api/users/${user.id}/queues/${queue.id}`,
      data: { user, queue },
    });
}

export const createQueue = (userId) => {

  console
    $.ajax({
      method: "POST",
      url: `/api/users/${userId}/queues`,
      data: { 
        queue: {
          user_id: userId,
          anime_id: null,
          episode_id: null,
        } },
    });
}