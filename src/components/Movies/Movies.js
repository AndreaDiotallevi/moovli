import React from 'react';

const Movies = (props) => (
  <div data-test="movies">
    <h1 data-test="movies-country-message">
        You have choosen
      {' '}
      {props.country}
!
    </h1>
    <div data-test="movies-container">
      <ul>
        {props.movies.map((movie) => (
          <li id={movie.id}>
            <h3 data-test={`movie-title-${movie.id}`}>
              {movie.title}
            </h3>
            <p data-test={`movie-overview-${movie.id}`}>
              {movie.overview}
            </p>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default Movies;
