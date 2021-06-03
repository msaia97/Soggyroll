import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, Hashrouter } from 'react-router-dom';

import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import { AuthRoute } from '../util/route_util';
import Homepage from './homepage/homepage';

const App = () => (
    <div>
        <header>
            <Link to="/" className="header-link">
                <h1>Soggyroll</h1>
            </Link>
            <Homepage />
        </header>
        <br />
        <Switch>
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
        </Switch>
        
    </div>
);

export default App;