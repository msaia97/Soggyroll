import React from 'react';
import { Link } from 'react-router-dom';
import AnimeHover from './anime_hover_container';

class Animes extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            anime: {},//this.props.show,
            title: '',
            description: '',
            cover_photo: null
        };
        this.handleHover = this.handleHover.bind(this);
    }

    handleHover(e){
        e.preventDefault();
        // console.log(HoverTemplate)
        console.log(this.props)
        return(
            <AnimeHover />
            // <HoverTemplate  />
        )
        
    }

    render(){
        const { anime } = this.props;
        // console.log(this.props)
        return(
            <div className="anime-template">
                <Link to={`/animes/${anime.id}`} className="show-title-link">
                    <img className="anime-img"
                        src={anime.cover_photo} 
                        onMouseEnter={e => this.handleHover(e)} 
                    />   
                    <b>{anime.title}</b>
                </Link>
            </div>
        )
    }
}

// const HoverTemplate = (props) =>{
//      return(
//         <div className="anime-hover-wrapper">
//                 <div className="anime-hover-header">
//                     <p>{this.props.anime.title}</p>
//                 </div>
//                 <div className="anime-hover-description">
//                     <p>{this.props.anime.title}</p>
//                 </div>
//             </div>
//      )
// }

export default Animes;