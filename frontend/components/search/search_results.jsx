import React, { Component } from 'react';

export default class SearchResults extends Component {

  componentDidMount() {
    if(Object.values(this.props.animes).length < 1) {
      this.props.getAnimes();
    }
  }

  filterAnimes(){
    const { query, animes } = this.props;
    const animeList = Object.values(animes);

    const results = animeList.filter((ele) => {
      const title = ele.title.toLoweCase();
      return title.includes(query.toLowerCase());
    });
    return results;
  }

  render() {
    const results = this.filterAnimes();
    return (
      <div>
        {results.length < 1 ? (
          <>
            <div className="background-results"></div>
            <h2 className="no-results">No results for {this.props.query}</h2>
          </>
        ) : (
          <div className="results-list">
            {results.map((anime) => {
              return (
                // animeList component
              )
            })}
          </div>
        )
      }
      </div>
    )
  }
}