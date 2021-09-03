import React from 'react';

class BookmarkItem extends React.Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.props.getAnimes();
    }
    
    render(){
        let animes = this.props.animes || null
        let bmk = this.props.bookmark
        console.log(animes)
        return(
            <div>
                {animes.map( (anime) => {
                    if(bmk.anime_id === anime.id){
                        return(
                            <div>
                                <div>
                                    <img src={anime.cover_photo} alt="" />
                                </div>
                                <div>
                                    <li>{anime.title}</li>
                                    <li>{anime.description}</li>
                                </div>
                            </div>
                        )
                    }
                })}
            </div>
        )
        // if(animes !== null){
        //     animes.forEach(anime => {
        //     if(anime.anime_id === anime.id){
        //         return(
        //             <div>
        //                 {/* <div>
        //                     <img src={anime.cover_photo} alt="" />
        //                 </div> */}
        //                 <div>
        //                     <li>{anime.title}</li>
        //                     <li>{anime.description}</li>
        //                 </div>
        //             </div>
        //         )

        //     }
        //     })
        // }else{
        //     return(
        //         null
        //     )
        // }
    }
}

export default BookmarkItem;