import React from 'react';
import { Link } from 'react-router-dom';
import { getBookmarks } from '../../actions/bookmark_actions';

class Featured extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillUpdate(){
        // this.props.getAnimes()
    }

    componentDidMount(){
        let userId = Object.values(this.props.user)[0].id
        // console.log(user)
        getBookmarks(userId)
    }


    render() {
        let animes = this.props.animes || [];
        let final = [];
        for(let i = 0; i < 5; i++){
            final.push(animes[i]);
        }
        // if(final.length === 0)return (<div></ div>)
        // console.log(final)

       return(
           <div className="featured">
               <p>Featured Shows:</p>
               <ul>
                {final.map(anime => {
                    // debugger
                    if(anime !== undefined ){
                        return(
                            <Link className="featured-link" to={`/animes/${anime.id}`}>
                                <li className="featured-item">
                                    <img className="home-featured-img" src={anime.cover_photo} alt="" />
                                    <p className="home-featured-title">{anime.title}</p>
                                </li>
                            </Link>
                        )
                    }else{
                        return(<div></div>)
                    }
                })}
               </ul>
           </div>
       )
    }
}

export default Featured;