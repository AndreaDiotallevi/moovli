import React, { Component } from 'react';
import Dropdown from 'react-dropdown'

class Movies extends Component {
  state = {
    genreList: ["Action", "Adventure", "Animation", "Comedy", "Crime",
                "Documentary", "Drama", "Family", "Fantasy", "History",
                "Horror", "Music", "Mystery", "Romance", "Science Fiction",
                "TV Movie", "Thriller", "War", "Western"
    ],
    selectedGenre: null
  }

  _onSelect = (event) => {
    const value = event.value;
    this.setState({selectedGenre: value});
  }

  filterMovies = () => {
    if (this.state.selectedGenre === null) {
      return this.props.movies;
    } else {
      return this.props.movies.filter((movie) => movie.genreList.includes(this.state.selectedGenre))
    }
  }

  render() { 
    return (
      <div data-test="movies">
      <h1 data-test="movies-country-message">
        You have choosen
        {' '}
        {this.props.country}
        !
      </h1>

      <Dropdown data-test={'filter-by-genre-dropdown'} options={this.state.genreList} onChange={this._onSelect} value={this.genreList} placeholder="Filter by genre" />
      
      <div data-test="movies-container">
        <ul>
          {this.filterMovies().map(movie => (
            <li id={movie.id}>
              <h3 data-test={`movie-title-${movie.id}`}>
                {movie.title}
              </h3>
              <p data-test={`movie-overview-${movie.id}`}>
                {movie.overview}
              </p>
              <p data-test={`movie-release-date-${movie.id}`}>
                {movie.releaseDate}
              </p>
              <p data-test={`movie-vote-average-${movie.id}`}>
                {movie.voteAverage}
              </p>
              <img data-test={`movie-poster-url-${movie.id}`}
                  src={`${movie.posterUrl}`}>
                  </img>
              <p data-test={`movie-genre-list-${movie.id}`}>
                Genre/s: {movie.genreList.join(', ')}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <button onClick={this.props.onBackToHome}>Back</button>
    </div>
    );
  }
}
 
export default Movies;
