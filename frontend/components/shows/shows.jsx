import React from 'react';
import { Link } from 'react-router-dom';

class Shows extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            decription: ''
        };
        // this.handleClick() = this.handleClick.bind(this);
    }

    // not sure if this function will work but could make the 
    // titles link to the show's show page

    // handleClick(e){
    //     e.preventDefault();
    //     return(
    //         <Link to="/shows/{this.props.id}" className="show-title-link">
    //             <b>{this.props.title}</b>
    //         </Link>
    //     )
    // }

    render(){
        return(
            <div>
                <li>{this.state.title}</li>
                <li>{this.state.description}</li>
            </div>

            //could possibly look like this
            // <div className="shows">
            //     <div className="show-img">
            //         <img src="" />
            //     </div>
            //     <div className="show-title">
            //         <a href="">{this.props.title}</a>
            //                  or
            //          <Link to="/shows/{this.props.id}" className="show-title-link">
    //                      <b>{this.props.title}</b>
    //                  </Link>
            //     </div>
            // </div>
        )
    }
}

export default Shows;