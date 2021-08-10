import { RECEIVE_QUEUE, RECEIVE_QUEUES, REMOVE_QUEUE } from '../../actions/queue_actions';

const queueReducer = (state = {}, action ) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_QUEUE:
            return Object.assign({}, state, {
                [action.user.id]: action.queue.id
            })
        case RECEIVE_QUEUES: 
            return action.queues
        case REMOVE_QUEUE:
             nextState = Object.assign({}, state);
            delete nextState[action.step.id]
            return nextState
        default:
            return state;
    }
}

export default queueReducer;