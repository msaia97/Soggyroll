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
        console.log(this.props)
    }

    // handleClick(e){
    //     e.preventDefault();
    //     this.setState({
    //         anime: this.state.anime
    //     })
    // }

    render(){
        // let animeId = this.props.animeId
        // let animeNames;
        // let allAnimes = Object.values(this.props.animes);
        // animeNames = allAnimes.map((anime, i) => (
        
        // ))
        let currentAnime = Object.values(this.props.animes)
        // this.state.anime
        return(
            <div className="anime-template">
                <Link to={`/animes/${currentAnime.id}`}
                        className="show-title-link"
                        // component={AnimeShow}
                        // onClick={this.handleClick}
                        >
                    <img className="anime-img" src={this.props.anime.cover_photo} />   
                    <b>{this.props.anime.title}</b>
                </Link>
            </div>
        )
    }
}

export default Animes;