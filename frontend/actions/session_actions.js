import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const REMOVE_ERRORS = "REMOVE_ERRORS";
//actions
const receiveCurrentUser = (currentUser) => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
});

const receiveSessionErrors = (errors) => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
})

export const removeErrors = () => {
    return({
    type: REMOVE_ERRORS,
})}

//thunk action creators
export const signup = (user) => (dispatch) => (
    APIUtil.signup(user).then(
        (user) => dispatch(receiveCurrentUser(user)),
        (err) => dispatch(receiveSessionErrors(err.responseJSON))
    )
);

export const login = (user) => dispatch => {
    return (APIUtil.login(user).then(
        (user) => dispatch(receiveCurrentUser(user)),
        (err) => dispatch(receiveSessionErrors(err.responseJSON))
    ))
};

export const logout = () => dispatch => (
    APIUtil.logout().then(
        () => dispatch(logoutCurrentUser())
    )
);

