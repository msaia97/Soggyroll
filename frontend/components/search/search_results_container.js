import { connect } from 'react-redux';
import React from 'react';
import { withRouter } from 'react-router-dom';
import SearchResults from './search_results';
import { getAnimes } from '../../actions/anime_actions';

const mSTP = (state, ownProps) => ({
  query: ownProps.match.params.query,
  animes: state.entities.animes,
});

const mDTP = (dispatch) => ({
  getAnimes: () => dispatch(getAnimes()),
})

export default withRouter(connect(mSTP, mDTP)(SearchResults))