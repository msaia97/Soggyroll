export const fetchQueues = (user) => {
    return $.ajax({
      method: "GET",
      url: "/api/queues",
      data: { user },
    });
}

export const deleteQueue = (user) => {
    $.ajax({
      method: "DELETE",
      url: "/api/queues",
      data: { user },
    });
}

export const createQueue = (user) => {
    $.ajax({
      method: "POST",
      url: "/api/queues",
      data: { user },
    });
}