import { connect } from 'react-redux';
import { getQueue, getQueues, createQueue, deleteQueue } from '../../actions/queue_actions';
import Queue from './queue';

const mSTP = (state) => {
    return {
        queue: [],
        user: state.entities.users
    }
}

const mDTP = dispatch => {
    return {
        getQueue: userId => dispatch(getQueue(userId)),
        getQueues: userId => dispatch(getQueues(userId)),
        createQueue: userId => dispatch(createQueue(userId)),
        deleteQueue: userId => dispatch(deleteQueue(userId))
    }
}

export default connect(mSTP, mDTP)(Queue);