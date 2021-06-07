import { connect } from 'react-redux';
import { getShow, getShows } from '../../actions/show_actions';

import Shows from './shows';

const mSTP = (state) => {
  return {
      shows: Object.values(state.entities.shows),
    //   title: Object.values(state.entities.shows.title),
    //   description: Object.values(state.entities.shows.description)
  }
}

const mDTP = dispatch => {
    return{
        getShow: showId => dispatch(getShow(showId)),
        getShows: () => dispatch(getShows())
    };
}

export default connect(mSTP, mDTP)(Shows);