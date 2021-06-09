import React from 'react';
import { Link } from 'react-router-dom';


class Navbar extends React.Component {
    constructor(props){
        super(props);
        this.buttonSwitch = this.buttonSwitch.bind(this);
    }

    buttonSwitch = () => {
        if(currentUser !== null){
            return(
                <div>
                    <input type="submit"
                        value="logout"
                        onClick={this.props.logout}
                     />
                </div>
            )
        }else{
            return(
                <div>
                    <Link to="/signup">Sign up</Link>
                </div>
            )
        }
    }

    render(){
        return(
            <div className="nav">
                <ul className="nav-items">
                    {/* <li>
                        <Link to="/animes">Home</Link>
                    </li> */}
                    <li>{this.buttonSwitch}</li>
                    {/* <li>
                        <input type="submit"
                        value="logut"
                        onClick={this.props.logout} />
                        {/* {currentUser !== null ? a} */}
                     {/* </li>    */}
                    {/* <li>Hello world im a nav bar</li> */}
                </ul>
            </div>
        )
    }
}

export default Navbar;