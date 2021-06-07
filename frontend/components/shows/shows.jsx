import React from 'react';
import { Link } from 'react-router-dom';

class Shows extends React.Component {
    constructor(props){
        super(props);
        console.log(this.props)
        this.state = {
            title: '',
            decription: ''
        };
    }

    componentDidMount(){
        this.setState({title: this.props.title,
        description: this.props.description});
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
            <div className="show-template" >
                <li>Test</li>
                <li>{this.props.title}</li>
                <li>{this.props.description}</li>
            </div>

            // could possibly look like this
            // <div className="shows">
            //     <div className="show-img">
            //         <img src="" />
            //     </div>
            //     <div className="show-title">
            //         <a href="">{this.props.title}</a>
            //                  or */}
            //          {/* <Link to="/shows/{this.props.id}" className="show-title-link"> */}
            //              <b>{this.props.title}</b>
            //          {/* </Link>
            //     </div>
            // </div>
        )
    }
}

export default Shows;