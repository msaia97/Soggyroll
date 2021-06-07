import React from 'react';
import { Link } from 'react-router-dom';
// import { receiveShow } from '../../actions/show_actions';

class Animes extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            anime: {},//this.props.show,
            title: '',
            description: '',
            cover_photo: null
        };
    }


    componentDidMount(){
        this.props.getAnime(this.props.anime.id);
    //    targetAnime.append(cover_photo);
    }


    render(){
        return(
            // <div className="anime-template" >
            //     <br />
            //     <li>{this.props.anime.title}</li>
            //     <li>{this.props.anime.description}</li>
            //     <br />
            // </div>

            // could possibly look like this
            <div className="anime-template">
                <div className="anime-img">
                    {this.props.anime.cover_photo}
                </div>
                <div className="anime-title">
                      <Link to="/animes/{this.props.anime.id}" className="show-title-link"> 
                         <b>{this.props.anime.title}</b>
                      </Link>
                </div>
            </div>
        )
    }
}

export default Animes;