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
        this.addToQueue = this.addToQueue.bind(this);
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

    addToQueue(e){
        // console.log(this.props)
        e.preventDefault();
        this.props.createQueue(Object.values(this.props.user)[0])
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
                <button type="button" onClick={e => this.addToQueue(e)}></button>
                <AnimeHover anime={anime} isHovering={this.state.isHovering} />
            </div>
        )
    }
}

export default Animes;