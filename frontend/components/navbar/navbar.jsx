import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        // console.log(this.props)
        if(this.props.user === null || this.props.user === undefined){
            return(
                <div className="nav">
                    <Link to="/animes" className="header-link">
                        <h1>Soggyroll</h1>
                    </Link>
                    <div className="nav-element">
                        <ul>
                            <li>
                                <Link to="/signup"> Sign up</Link>
                            </li>
                            <li>
                                <Link to="/login">Log in</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            )
        }else{
            return(
               <div className="nav">
                    <Link to="/animes" className="header-link">
                        <h1>Soggyroll</h1>
                    </Link>
                   <div className="nav-elements">
                        <ul>
                            <li>
                                <button className="nav-button" 
                                    onClick={this.props.logout}>
                                Log Out</button>
                            </li>
                        </ul>
                   </div>
               </div>
            )
        }          
    }
}

export default Navbar;