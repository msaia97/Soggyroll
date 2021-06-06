import { connect } from 'react-redux';
import { receiveShow, receiveAllShows } from '../../actions/show_actions';

import Shows from './shows';

const mSTP = (state) => {
   console.log(state);
    return{ 
        title: state.entities.shows.title,
        description: state.entities.shows.description
    }
}

const mDTP = dispatch => {
    return{
        receiveShow: showId => dispatch(receiveShow(showId)),
        receiveAllShows: shows => dispatch(receiveAllShows(shows))
    };
}

export default connect(mSTP, mDTP)(Shows);