import React from 'react';
import { Link } from 'react-router-dom';
import { getBookmarks } from '../../actions/bookmark_actions';
import BookmarkItem from './bookmark_item_container';

class BookmarkList extends React.Component {
    constructor(props) {
        super(props)
    }

    componentWillMount(){
        // console.log(user)
        let user = Object.values(this.props.user)[0]
        getBookmarks(user.id)
    }
    
    componentDidUpdate(){
        // let user = Object.values(this.props.user)[0]
        // getBookmarks(user.id)
    }

    componentWillUnmount(){
        let user = Object.values(this.props.user)[0]
        getBookmarks(user.id)
    }

    render() {
        let bookmarks = Object.values(this.props.bookmarks);
        let user = this.props.user;
        // console.log(bookmarks);
        // if((bookmarks.length > 0) && (user.id !== undefined)){
            return(
                <div>
                    <ul>
                        {bookmarks.map(bookmark => {
                            return <BookmarkItem bookmark={bookmark} />
                        })}
                    </ul>
                </div>
            )
        // }else{
        //     return(
        //         <div>
        //             <p>Not working</p>
        //         </div>
        //     )
        // }
    }
}

export default BookmarkList;