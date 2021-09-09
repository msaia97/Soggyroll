import React from 'react';
import EpisodeList from '../episodes/episode_list_container';


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
        // console.log(this.props)
        this.props.getAnime(this.props.match.params.animeId)
            .then(() => this.setState(this.props.anime))
        this.props.getEpisodes(this.props.match.params.animeId)
            // .then((episodes) => dispatch(receiveAllEpisodes(episodes)))
    }

    componentWillUnmount(){
        // this.props.getAnimes()
    }



    render(){
        // const ({ curAnime }) = this.props.anime;
        return(
                <div className="full-show">
                    <div className="anime-show-ep">
                        <EpisodeList animeId={this.props.anime.id} />
                    </div>
                    <div className="anime-show">
                        <div className="anime-show-description">
                            <img className="anime-show-img" src={this.props.anime.cover_photo} />
                            <ul>
                                <li>{this.props.anime.title}</li>
                                <br />
                                <li>{this.props.anime.description}</li>
                            </ul>
                        </div>
                    </div>
                </div>
        )
    }
}

export default AnimeShow;