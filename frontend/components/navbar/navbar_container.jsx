import React from 'react';
import { logout } from '../../actions/session_actions';
import { connect } from 'react-redux';
import { getAnimes } from '../../actions/anime_actions';

import Navbar from './navbar';

const mSTP = ({session, entities: {users, animes}}) => {
    return{
        user: users[session.id],
        animes: animes
    }
};

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    getAnimes: () => dispatch(getAnimes()),
});

export default connect(mSTP, mDTP)(Navbar);