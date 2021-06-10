import React from 'react';
import { Link } from 'react-router-dom';
import AnimeHover from './anime_hover';

class Animes extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            anime: {},
            title: '',
            description: '',
            cover_photo: null,
            isHovering: false
        };
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
    }

    handleMouseEnter(e){
        e.preventDefault();
        this.setState({
            isHovering: true
        })
    }

    handleMouseOut(e){
        e.preventDefault();
        this.setState({
            isHovering: false
        })
    }

    render(){
        const { anime } = this.props;
        return(
            <div className="anime-template">
                <Link to={`/animes/${anime.id}`} className="show-title-link">
                    <img className="anime-img"
                        src={anime.cover_photo}
                        onMouseEnter={e => this.handleMouseEnter(e)}
                        onMouseOut={e => this.handleMouseOut(e)} />   
                    <b>{anime.title}</b>
                </Link>
                <AnimeHover anime={anime} isHovering={this.state.isHovering} />
            </div>
        )
    }
}

export default Animes;