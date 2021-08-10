import * as APIUtil from '../util/queue_api_util';

export const RECEIVE_QUEUE = "RECEIVE_QUEUE";
export const RECEIVE_QUEUES = "RECEIVE_QUEUES";
export const REMOVE_QUEUE = "REMOVE_QUEUE";

export const receiveQueue = payload => {
    return {
      type: RECEIVE_QUEUES,
      payload
    };
}

export const receiveQueues = payload => {
    return {
      type: RECEIVE_QUEUES,
      payload
    };
}

export const removeQueue = (userId) => {
    return({
        type: REMOVE_QUEUE,    
    })
}

// thunk
export const createQueue = (user) => {
  return(APIUtil.createQueue(user)
    .then((user) => dispatch(receiveQueue(user))))
}

export const fetchQueues = (userId) => {
  return(APIUtil.fetchQueues(userId)
    .then((user) => dispatch(receiveQueues(user))))
}

export const fetchQueue = (userId) => {
  return(APIUtil.fetchQueue(userId)
    .then((user) => dispatch(receiveQueue(user))))
}

export const deleteQueue = (userId) => {
  return(APIUtil.deleteQueue(userId)
    .then((userId) => dispatch(removeQueue(userId))))
}