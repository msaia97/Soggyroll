import {connect} from 'react-redux';
import { getShows } from '../../actions/show_actions';
import ShowLibrary from './show_library';

const mSTP = state => ({
    shows: Object.values(state.entities.shows)
})

const mDTP = dispatch => {
    return {
        getShows: shows => dispatch(getShows(shows))
    }
}

export default connect(mSTP, mDTP)(ShowLibrary);