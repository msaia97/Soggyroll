import React from 'react';
import SearchBox from './search_box';

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
    componentWillMount(){
        this.props.getAnimes()

    }
    componentDidUpdate(){
        // console.log(this.props)
    }

    handleChange(e){
        e.preventDefault()
        this.setState({
            searchField: e.target.value
        })
        console.log(this.state)
    }

    SearchList(){
        return(
            <div>
                <ul>
                    {props.map(prop => {
                        return(
                            <li>{prop.title}</li>
                        )
                    })}
                </ul>
            </div>
        )
    }

    render(){
        // console.log(this.props.animes)
        let animes = this.props.animes;
        let searchField = this.state.searchField;
        console.log(this.props)
        if(animes){
            let filteredAnimes = animes.map(anime => {
                return anime.title.toLowerCase().includes(searchField.toLowerCase())
            });
        }
       
        return(
            <div>
                <SearchBox placeHolder="Enter an Anime ..."
                onChange={e => this.handleChange(e)}
                />
                <SearchList props={filteredAnimes} />
            </div>
        )
    }
}

export default SearchBar;