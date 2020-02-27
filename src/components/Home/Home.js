import React from 'react';
import MapContainer from '../MapContainer/MapContainer';

const Home = (props) => (
  <div className="home-container" data-test="app">
    <div className="home-header">
      <h1 className="home-header-title" data-test="app-title">Moovli - Click on a country and find the best movies from that country!</h1>
    </div>
    <div className="map-container">
      <MapContainer
        onCountryChoice={props.onCountryChoice}
        infoWindowVisible={props.infoWindowVisible}
        onClickCoordinates={props.onClickCoordinates}
      />
    </div>
  </div>
);

export default Home;
