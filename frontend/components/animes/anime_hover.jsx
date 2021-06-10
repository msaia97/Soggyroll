import React from 'react';

class AnimeHover extends React.Component{
    constructor(props){
        super(props);
        // console.log(this.props)
        this.state ={
            isHovering: false,
            anime: {}
        }
        this.handleHover = this.handleHover.bind(this);
    }

    handleHover(){
        this.setState(this.toggleHoverState);
    }

    toggleHoverState(state){
        return({ 
            isHovering: !state.isHovering
        })
    };

    componentDidMount(){
        this.props.getAnime(this.props.match.params.animeId)
            .then(() => this.setState(this.props.anime))
            console.log('yoooooo')
    }

    render(){
        return(
            <div className="anime-hover-wrapper"
                 onMouseEnter={this.handleHover}
                 onMouseLeave={this.handleHover}>
                <div className="anime-hover-header">
                    <p>{this.props.anime.title}</p>
                </div>
                <div className="anime-hover-description">
                    <p>{this.props.anime.title}</p>
                </div>
            </div>
            // <p>Am I hovering?</p>
        )
    }
}

export default AnimeHover;
