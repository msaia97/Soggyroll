import React from 'react';
import { Link } from 'react-router-dom';

class Bookmark extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount(){
        console.log(this.props)
        let user = this.props.user
        this.props.getBookmarks(user.id)
    }

    render() {
        let bookmarks = this.props.bookmark;
        if(this.props.bookmark.length > 0){
            return(
                <div>
                    <ul>
                        {bookmarks.map(bookmark => {
                            return(
                                <li>{bookmark}</li>
                            )
                        })}
                    </ul>
                </div>
            )
        }else{
            return(
                <div>
                    <p>Not working</p>
                </div>
            )
        }
    }
}

export default Bookmark;