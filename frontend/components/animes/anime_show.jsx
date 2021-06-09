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
        // let animeId = this.props.match.params
        this.props.getAnime(this.props.match.params.animeId)
            .then(() => this.setState(this.props.currentAnime))
        // console.log(this.props)
    }
    render(){
        // const { curAnime } = this.props.currentAnime;
        console.log(this.props.currentAnime);
        return(
            <div className="anime-show">
                <img className="anime-show-img" src={this.props.currentAnime.cover_photo} />
                <ul>
                    <li>{this.props.currentAnime.title}</li>
                    <br />
                    <li>{this.props.currentAnime.description}</li>
                </ul>
             <br />
                <p>Its Working !</p>
            </div>
        )
    }
}

export default AnimeShow;