import React from 'react';
import { getBookmarks, deleteBookmark } from '../../actions/bookmark_actions';

class BookmarkItem extends React.Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.props.getAnimes();
        let userId = Object.values(this.props.user)[0].id;
        getBookmarks(userId);
    }

    componentWillUnmount(){
        let userId = Object.values(this.props.user)[0].id;
        getBookmarks(userId);
    }

    shouldComponentUpdate(){
      
    }

    componentDidUpdate(){
        // let userId = Object.values(this.props.user)[0].id;
        // getBookmarks(userId);
    }

    removeBookmark(e){
        e.preventDefault();
        // console.log(this.props)
        deleteBookmark(this.props.bookmark)
    }
    
    render(){
        let animes = this.props.animes || null
        let bmk = this.props.bookmark
        // console.log(animes)
        return(
            <div>
                {animes.map( (anime) => {
                    if(bmk.anime_id === anime.id){
                        return(
                            <div className="bookmark-item">
                                <div className="bookmark-item-photo-wrapper">
                                    <img className="bookmark-item-photo" src={anime.cover_photo} alt="" />
                                </div>
                                <div className="bookmark-item-detail">
                                    <li>{anime.title}</li>
                                    <li>{anime.description}</li>
                                    <div>
                                        <button
                                            className="remove-bookmark-button"
                                            onClick={e => this.removeBookmark(e)}
                                        >Remove</button>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                })}
            </div>
        )
    }
}

export default BookmarkItem;