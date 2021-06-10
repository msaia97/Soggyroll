import React from 'react';

class AnimeHover extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            isHovering: false,
            anime: {}
        }
    }

    render(){
        if(this.props.isHovering){
            return(
                <div className="anime-hover-wrapper">
                    <p className="anime-hover-header">{this.props.anime.title}</p>
                    <p className="anime-hover-description">{this.props.anime.description}</p>
                </div>
            )  
        }else{
            return null
        }
    }
}

export default AnimeHover;
