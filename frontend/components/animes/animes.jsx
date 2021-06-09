import React from 'react';
import { Link } from 'react-router-dom';
import AnimeShow from './anime_show_container';

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
        // console.log(this.props.anime)
    }

    render(){
        const { anime } = this.props;
        return(
            <div className="anime-template">
                <Link to={`/animes/${anime.id}`} className="show-title-link">
                    <img className="anime-img" src={anime.cover_photo} />   
                    <b>{anime.title}</b>
                </Link>
            </div>
        )
    }
}

export default Animes;