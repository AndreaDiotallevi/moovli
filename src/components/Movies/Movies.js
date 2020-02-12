import React, { Component } from 'react';

class Movies extends Component {
  state = {
    genreList: ["Action", "Comedy", "Crime",
                "Drama", "History",
                "Horror", "Music", "Science Fiction",
                "Thriller", "Western"
    ],
    selectedGenre: null
  }

  handleGenreChoice = (event) => {
    const selectedGenre = event.target.value;
    this.setState({selectedGenre});
  }

  filterMovies = () => {
    if (this.state.selectedGenre === 'All' || this.state.selectedGenre === null) {
      return this.props.movies;
    } else {
      return this.props.movies.filter((movie) => movie.genreList.includes(this.state.selectedGenre))
    }
  }

  render() {
    return (
      <div className='movies-component' data-test="movies">
        <div className='movies-component-header'>
          <button className='back-home-button' onClick={this.props.onBackToHome}>Back</button>
          <h1 className='movies-country-message' data-test="movies-country-message">
            You Have Chosen
            {' '}
            {this.props.country}
            !
          </h1>
          <button></button>
        </div>
        <div className='genre-buttons'>
          {this.state.genreList.map(genre => <button value={genre}
                                                     onClick={this.handleGenreChoice}
                                                     data-test={`genre-button-${genre.toLocaleLowerCase()}`}>{genre}</button>)}
          <button value={'All'} onClick={this.handleGenreChoice}>All</button>
        </div>

        <div className='movies-container' data-test="movies-container">
          <ul>
            {this.filterMovies().map(movie => (
            <li className='movie' data-test={`movie-${movie.id}`}>
              <div className='movie-info'>
                <h2 data-test={`movie-title-${movie.id}`}>
                  {movie.title}
                </h2>
                <p data-test={`movie-overview-${movie.id}`}>
                  {movie.overview}
                </p>
                <p data-test={`movie-release-date-${movie.id}`}>
                  {movie.releaseDate}
                </p>
                <p data-test={`movie-vote-average-${movie.id}`}>
                  {movie.voteAverage}
                </p>
                <p data-test={`movie-genre-list-${movie.id}`}>
                  Genre/s: {movie.genreList.join(', ')}
                </p>
              </div>
              <div className='movie-image'>
                <img data-test={`movie-poster-url-${movie.id}`}
                  src={`${movie.posterUrl}`}>
                </img>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
    );
  }
}

export default Movies;
