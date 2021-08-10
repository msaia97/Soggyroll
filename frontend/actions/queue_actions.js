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

export const removeQueue = (payload) => {
    return({
        type: REMOVE_QUEUE, 
        payload   
    })
}

// thunk

export const createQueue = (user) => {
  console.log(user)
  return(APIUtil.createQueue(user)
    .then((user) => dispatch(receiveQueue(user))))
}

export const getQueues = (userId) => {
  return(APIUtil.getQueues(userId)
    .then((user) => dispatch(receiveQueues(user))))
}

// export const getQueue = (userId) => {
//   return(APIUtil.getQueue(userId)
//     .then((user) => dispatch(receiveQueue(user))))
// }

export const deleteQueue = (userId) => {
  return(APIUtil.deleteQueue(userId)
    .then((userId) => dispatch(removeQueue(userId))))
}