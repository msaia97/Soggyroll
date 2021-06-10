import React from 'react';
import { Link } from 'react-router-dom';
import AnimeLibrary from '../animes/anime_library_container';



const Homepage = ({ currentUser, logout }) => {
  return(
    <AnimeLibrary />
  )
  // const sessionLinks = () => (
  //   <nav className="login-signup">
  //     <Link to="/login">Please Login</Link>
  //     &nbsp;or&nbsp;
  //     <Link to="/signup">Sign up!</Link>
  //   </nav>
  // );
  // const personalHomepage = () => {
  //  return (
  //    <div className="anime-homepage">
  //       <hgroup className="header-group">
  //         {/* <h2 className="header-name">Hi, {currentUser.username}!</h2> */}
  //         <button className="header-button" onClick={logout}>Log Out</button>
  //       </hgroup>
  //       {/* <Link to="/shows">Show Library</Link> */}
  //       <AnimeLibrary />
  //   </div>
  //  )};

  // return currentUser ? personalHomepage() : sessionLinks();
};


export default Homepage;