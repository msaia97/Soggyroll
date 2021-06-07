import React from 'react';
import { Link } from 'react-router-dom';
// import { receiveShow } from '../../actions/show_actions';

class Animes extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            anime: {},//this.props.show,
            title: '', //this.props.title,
            description: '' //this.props.description
        };
    }


    componentDidMount(){
        this.props.getAnime(this.props.anime.id);
    }


    render(){
        return(
            <div className="anime-template" >
                <br />
                <li>{this.props.anime.title}</li>
                <li>{this.props.anime.description}</li>
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

export default Animes;