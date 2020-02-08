import React from 'react';
import Moovie from './Moovie'

const Moovies = (props) => {
  return (
    <div id='movies'>
      <h1>
        You have chosen {props.country}!
      </h1>
      {props.movies.map(movie =>
        <Moovie />
      )}
    </div>
  )
}
 
export default Moovies;
