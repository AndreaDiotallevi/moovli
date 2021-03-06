import React, { Component } from 'react';
import imdbLogo from '../../imdb.png';
import noPhotoAvailable from '../../no-photo-available.jpg';

class Movies extends Component {
  state = {
    genreList: ["Action", "Comedy", "Crime",
                "Drama", "History", "Romance",
                "Horror", "Music", "Sci-Fi",
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

  handleImageUrlError = (event) => {
    event.target.src = noPhotoAvailable;
  }

  render() {
    return (
      <div className='movies-component' data-test="movies">
        <div className='movies-component-header'>
          <button className='back-home-button' onClick={this.props.onBackToHome}>Home</button>
          <h1 className='movies-country-message' data-test="movies-country-message">
            You Have Chosen
            {' '}
            {this.props.country}
            !
          </h1>
          <button className='fake-button'></button>
        </div>
        <div className='genre-buttons'>
          {this.state.genreList.map((genre, index) => <button className='genre-button'
                                                     value={genre}
                                                     onClick={this.handleGenreChoice}
                                                     data-test={`genre-button-${genre.toLocaleLowerCase()}`}
                                                     key={index}>{genre}</button>)}
          <button value={'All'} className='genre-button' onClick={this.handleGenreChoice}>All</button>
        </div>

        <div className='movies-container' data-test="movies-container">
          <ul>
            {this.filterMovies().map((movie, index) => (
            <li className='movie' data-test={`movie-${movie.imdbID}`} key={index}>
              <div className='movie-info'>
                <div className='title-plot-container'>
                  <div className='movie-title-container'> 
                    <h2 data-test={`movie-title-${movie.imdbID}`}>
                      {movie.title}
                    </h2>
                    <a href={`https://www.imdb.com/title/${movie.imdbID}/`}><img className='imdb-logo' src={imdbLogo}></img></a>
                  </div>
                  <p className='movie-plot' data-test={`movie-plot-${movie.imdbID}`}>
                    {movie.plot}
                  </p>
                  <p className='movie-release-date' data-test={`movie-release-date-${movie.imdbID}`}>
                    <span className='movie-release-date-title'></span>{movie.releaseDate}
                  </p>
                </div>
                <div className='average-genres-container'>
                  <p className='movie-vote-average' data-test={`movie-vote-average-${movie.imdbID}`}>
                    <span className='average-rating-title'>IMDB Rating: </span>{movie.imdbRating}
                  </p>
                  <p className='movie-genre-list' data-test={`movie-genre-list-${movie.imdbID}`}>
                    <span className='average-rating-title'>Genres: </span>{movie.genreList.join(", ")}
                  </p>
                </div>
              </div>
              <div className='movie-image'>
                <img data-test={`movie-poster-url-${movie.imdbID}`}
                  src={`${movie.posterURL}`} onError={this.handleImageUrlError}>
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
