import React from 'react';
import SearchBox from './search_box';
import { useState } from 'react';

// const filteredAnimes = (animes, query) => {
//         if(!query){
//             return animes;
//         }
    
//         return animes.filter(anime => {
//             const animeTitle = anime.title.toLowerCase();
//             return animeTitle.includes(query)
//         })
// }

// function SearchBar() {
//     const { search } = window.location;
//     const query = new URLSearchParams(search).get('s');
//     // const [searchQuery, setSearchQuery] = useState(query || '');
//     const filteredAnimes = filteredAnimes(animes, searchQuery);

//     console.log(filteredAnimes)
//     return (
//         <div>
//             <SearchBox
//                 searchQuery={searchQuery}
//                 setSearchQuery={setSearchQuery}
//             />
//             <ul>
//                 {filteredAnimes.map(anime => (
//                     <li key={anime.key}>{anime.title}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// }


// -----------------------------------
// const { search } = window.location;
// const query = new URLSearchParams(search).get('s');
// const [searchQuery, setSearchQuery] = useState(query || '');
// const filteredAnimes = filterPosts(posts, searchQuery);

class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            animes: [],
            episodes: [],
            anime: {},
            episode: [],
            searchField: '',
        }
        this.handleChange = this.handleChange.bind(this);
    }
    
    filteredAnimes = (animes, query) => {
        if(!query){
            return animes;
        }
    
        return animes.filter(anime => {
            const animeTitle = anime.title.toLowerCase();
            return animeTitle.includes(query)
        })
    }

    componentWillMount(){
        this.props.getAnimes()
        this.setState({
            animes: this.props.animes
        })

    }

    handleChange(e){
        e.preventDefault()
        this.setState({
            searchField: e.target.value
        })
    }

    render(){
        const animes = this.props.animes;
        let searchField = this.state.searchField;
        // if(Object.keys(animes).length > 0){
        //     let filteredAnimes = animes.map(anime => {
        //         return anime.title.toLowerCase().includes(searchField.toLowerCase())
        //     });
        //     console.log(filteredAnimes)
        // }
       
        return(
            <div>
                <SearchBox  />
                {/* <ul>
                    {filteredAnimes.map(anime => {
                        return(
                            <li key={anime.id}>{anime.title}</li>
                        )
                    })}
                </ul> */}
            </div>
        )
    }
}

export default SearchBar;