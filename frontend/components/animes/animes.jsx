import React from 'react';
import { Link } from 'react-router-dom';

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
    }

    render(){
        return(
            <div className="anime-template">
                <Link to="/animes/{this.props.anime.id}" className="show-title-link">
                    <img className="anime-img" src={this.props.anime.cover_photo} />   
                    <b>{this.props.anime.title}</b>
                </Link>
            </div>
        )
    }
}

export default Animes;