import React from 'react';

const Movies = (props) => (
  <div data-test="movies">
    <h1 data-test="movies-country-message">
        You have choosen
      {' '}
      {props.country}

    </h1>
    <div data-test="movies-container">
      <ul>
        {props.movies.map((movie) => (
          <li key={movie.id}>
            <h3>
              {movie.title}
            </h3>
          </li>
        ))}
      </ul>
    </div>
    <button onClick={props.OnBackToHome}>Back</button>
  </div>
);

export default Movies;
