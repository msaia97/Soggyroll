import React from 'react';


class AnimeShow extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            anime: {},
            cover_photo: null
        }
    }

    componentDidMount(){
       this.props.getAnime(this.props.match.params.id)
    }
    render(){
        return(
            <div className="anime-show">
                {/* <img className="anime-show-img" src="{this.props.anime.cover_photo}" />
                <b>{this.props.animes.title}</b>
                <b>{this.props.animes.description}</b>  */}
                <p>Hi this is</p>
            </div>
        )
    }
}

export default AnimeShow;