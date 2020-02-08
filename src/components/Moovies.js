import React from 'react';

const Moovies = (props) => {
  return (
    <div data-test='moovies'>
      <h1>
        You have chosen {props.country}!
      </h1>
      <div data-test='moovies-container'>
        <ul>
          {props.moovies.map(moovie => 
            <li key={moovie.id}>
              <h3>
                {moovie.title}
              </h3>
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}
 
export default Moovies;
