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
    }

    componentDidMount(){
        console.log(this.props)
        // this.props.getAnimes()
    }

    searchFilterOnChange(e){
        this.setState({
            inputValue: e.target.value,
        })
    }

    render(){
        return(
            <div></div>
        )
    }
}

export default SearchBar;