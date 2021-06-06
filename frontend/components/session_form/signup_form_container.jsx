import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, removeErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mSTP = ({ errors }) => ({ 
    errors: errors.session,
    formType: 'Sign up',
    navLink: <Link to='/login'>Log in instead</Link>
});

const mDTP = (dispatch) => ({ 
    processForm: (user) => dispatch(signup(user)),
    removeErrors: () => dispatch(removeErrors())
});



export default connect(mSTP, mDTP)(SessionForm);