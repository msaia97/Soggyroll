import React from 'react';
import { Link } from 'react-router-dom';
import ShowLibrary from '../shows/show_library_container';



const Homepage = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="login-signup">
      <Link to="/login">Login</Link>
      &nbsp;or&nbsp;
      <Link to="/signup">Sign up!</Link>
    </nav>
  );
  const personalHomepage = () => {
   return (
     <div className="show-homepage">
        <hgroup className="header-group">
          <h2 className="header-name">Hi, {currentUser.username}!</h2>
          <button className="header-button" onClick={logout}>Log Out</button>
          
        </hgroup>
        <ShowLibrary />
    </div>
   )};

  return currentUser ? personalHomepage() : sessionLinks();
};


export default Homepage;