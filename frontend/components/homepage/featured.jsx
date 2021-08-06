import React from 'react';
import { Link } from 'react-router-dom';

class Featured extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillUpdate(){
        // this.props.getAnimes()
    }

    componentDidMount(){
        console.log(this.props)
    }


    render() {
        let animes = this.props.animes;
        let final = [];
        for(let i = 0; i < 5; i++){
            final.push(animes[i]);
        }
        console.log(final)

       return(
           <div className="featured">
               <p>Featured Shows:</p>
               <ul>
                {final.map(anime => {
                    return(
                        <Link to={`/animes/${anime.id}`}>
                            <li className="featured-item">
                                <img className="home-featured-img" src={anime.cover_photo} alt="" />
                                <p className="home-featured-title">{anime.title}</p>
                            </li>
                        </Link>
                    )
                })}
               </ul>
           </div>
       )
    }
}

export default Featured;