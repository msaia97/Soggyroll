import { connect } from 'react-redux';
import { receiveShow, receiveAllShows } from '../../actions/show_actions';

import Shows from './shows';

const mSTP = (state, ownProps) => {
    const {title} = ownProps
    return{ 
        shows: title 
    }
}

const mDTP = dispatch => {
    return{
        receiveShow: show => dispatch(receiveShow(show)),
        receiveAllShows: shows => dispatch(receiveAllShows(shows))
    };
}

export default connect(mSTP, mDTP)(Shows);