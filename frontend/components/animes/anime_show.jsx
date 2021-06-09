import React from 'react';



class AnimeShow extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          anime: {}
        }
        // this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount(){
        this.props.getAnime(this.props.match.params.animeId)
            .then(() => this.setState(this.props.match.params))
        console.log(this.props.match.params)
    }
    render(){
        const { anime } = this.props.match.params.animeId;
        return(
            <div className="anime-show">
                {/* <img className="anime-show-img" src="{anime.cover_photo}" />
                <b>{anime.title}</b>
                <b>{anime.description}</b>  */}
                <p>Hi this is</p>
            </div>
        )
    }
}

export default AnimeShow;