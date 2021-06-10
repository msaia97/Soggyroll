import React from 'react';
import { logout } from '../../actions/session_actions';
import { connect } from 'react-redux';
import Navbar from './navbar';

const mSTP = ({session, entities: {users}}) => {
    return{
        user: users[session.id]
        
    }
};

const mDTP = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(mSTP, mDTP)(Navbar);