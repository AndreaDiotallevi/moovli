import React from 'react';
import MapContainer from '../MapContainer/MapContainer';

const Home = (props) => (
  <div data-test="app">
    <h1 data-test="app-title">Moovli</h1>
    <MapContainer
      noMovies={props.noMovies}
      onClickCoordLat ={props.onClickCoordLat}
      onClickCoordLng ={props.onClickCoordLng}
      onCountryChoice={props.onCountryChoice}
    />
  </div>
);

export default Home;
