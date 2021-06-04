import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, removeErrors } from '../../actions/session_actions';
import SessionForm from './session_form';


const mSTP = ({ errors }) => ({
    errors: errors.session,
    formType: 'login',
    navLink:  <Link to='/signup'>sign up instead</Link>
});

const mDTP = (dispatch) => {
    // debugger;
    return{
    processForm: (user) => dispatch(login(user)),
    removeErrors: () => dispatch(removeErrors())
}};

export default connect(mSTP, mDTP)(SessionForm);