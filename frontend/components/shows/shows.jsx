import React from 'react';
import { Link } from 'react-router-dom';
import { receiveShow } from '../../actions/show_actions';

class Shows extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            show: {},//this.props.show,
            title: '', //this.props.title,
            description: '' //this.props.description
        };
        // this.componentDidMount = this.componentDidMount
        // .bind(this);
    }


    componentDidMount(){
        //  this.props.receiveShow(this.props.showId)
        this.props.getShow(this.props.show.id);
    }


    render(){
        return(
            <div className="show-template" >
                <br />
                <li>{this.props.show.title}</li>
                <li>{this.props.show.description}</li>
                <br />
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