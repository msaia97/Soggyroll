import React from 'react';
import { getBookmarks, deleteBookmark } from '../../actions/bookmark_actions';
import { Link } from 'react-router-dom';

class BookmarkItem extends React.Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.props.getAnimes();
        let userId = Object.values(this.props.user)[0].id || {};
        getBookmarks(userId);
     
        
    }


    componentDidUpdate(){
        // let animeId = this.props.bookmark.anime_id;
        // this.props.getEpisodes(animeId);
    }

    removeBookmark(e){
        e.preventDefault();
        // console.log(this.props)
        deleteBookmark(this.props.bookmark)
    }
    
    render(){
        let animes = this.props.animes || [];
        let bmk = this.props.bookmark || {};
        // if(animes === undefined)return(<div></div>)
        // let episodes = this.props.episodes || null
        // console.log(animes)
        // if(bmk.episode_id === null){
            return(
                <div>
                    {animes.map( (anime) => {
                        // debugger
                        // console.log("BMK", bmk, "ANIME", anime)
                        if(anime !== undefined){
                            if(bmk.anime_id === anime.id){
                                return(
                                    <div className="bookmark-item">
                                        <Link className="bookmark-item-link" to={`/animes/${anime.id}`} >
                                            <div className="bookmark-item-photo-wrapper">
                                                <img className="bookmark-item-photo" src={anime.cover_photo} alt="" />
                                            </div>
                                            <div className="bookmark-item-detail">
                                                <li className="bookmark-item-title" >{anime.title}</li>
                                                <li>{anime.description}</li>
                                                <div>
                                                    <button
                                                        className="remove-bookmark-button"
                                                        onClick={e => this.removeBookmark(e)}
                                                    >Remove</button>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            }else{
                                return(
                                    <div></div>
                                )
                            }

                        }else{
                                return(
                                    <div></div>
                                )
                            }
                    })}
                </div>
            )
        // }
        // else{
        //     return(
        //         <div className="bookmark-item">
        //             {episodes.map( (episode) => {
        //                 if(bmk.episode_id === episode.id){
        //                     return(
        //                         <div className="bookmark-item" >
        //                             <div className="bookmark-item-photo-wrapper">
        //                                 <img className="bookmark-item-photo" src={episode.photo} alt="" />
        //                             </div>
        //                             <div className="bookmark-item-detail">
        //                                 <li>{episode.title}</li>
        //                                 <li>{episode.description}</li>
        //                                 <div>
        //                                     <button
        //                                         className="remove-bookmark-button"
        //                                         onClick={e => this.removeBookmark(e)}
        //                                         >Remove</button>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     )
        //                 }
        //             })}
        //         </div>
        //     )
        // }
    }
}

export default BookmarkItem;