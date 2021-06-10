import React from 'react';



class AnimeShow extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          anime: {}, 
          cover_photo: null
        }
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount(){
        this.props.getAnime(this.props.match.params.animeId)
            .then(() => this.setState(this.props.anime))
    }



    render(){
        // const ({ curAnime }) = this.props.anime;
        return(
            <div className="anime-show">
                <img className="anime-show-img" src={this.props.anime.cover_photo} />
                <ul>
                    <li>{this.props.anime.title}</li>
                    <br />
                    <li>{this.props.anime.description}</li>
                </ul>
            </div>
        )
    }
}

export default AnimeShow;