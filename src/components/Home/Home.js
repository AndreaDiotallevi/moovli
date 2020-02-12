import React from 'react';
import MapContainer from '../MapContainer/MapContainer';

const Home = (props) => (
  <div data-test="app">
    <h1 data-test="app-title">Moovli</h1>
    <MapContainer
      onCountryChoice={props.onCountryChoice}
      infoWindowVisibile={props.infoWindowVisibile}
      onClickCoordLatLng ={props.onClickCoordLatLng}
    />
  </div>
);

export default Home;
