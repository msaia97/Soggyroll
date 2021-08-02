import React from 'react';

class EpisodeShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        // debugger
        // this.props.getEpisode(this.props.match.params)
        // console.log(this.state)
    }

    render(){
        let episodes = this.props.episodes;
        let anime = this.props.anime;
        
        // episodes.forEach(episode => {
            //     if(episode.videoId === anime.id){
                //         return(
                    //             console.log(maybe)
                    //             //  <div className="episode-show">
                    //             //     <p>Episode show page!!!</p>
                    //             //     <video src="episode.video"></video>
                    //             // </div>
                    //         )
                    //     }else{
                        //         return(
                            //             null
                            //         )
                            //     }
                            // })
                            console.log(episodes[0])
        return(
            <video  autoPlay  src={episodes[0].video} controls></video>
            // <div>
            //     {episodes.forEach(episode => {
            //         if(episode.videoId === anime.id){
            //             return(
            //                 <div>
            //                     <p>Working?</p>
            //                  </div>
            //             )
            //         }else{
            //             return(
            //                 <p>Not working</p>
            //             )
            //         }
            //     })}
            // </div>
        )
    }
}
export default EpisodeShow;