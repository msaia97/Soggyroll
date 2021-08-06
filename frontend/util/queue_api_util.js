export const fetchQueues = (user) => {
    return $.ajax({
      method: "GET",
      url: "/api/queues",
      data: { user },
    });
}

export const deleteQueues = (user) => {
    $.ajax({
      method: "DELETE",
      url: "/api/queues",
      data: { user },
    });
}

export const createQueues = (user) => {
    $.ajax({
      method: "POST",
      url: "/api/queues",
      data: { user },
    });
}