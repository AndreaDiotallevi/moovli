import React from 'react';
import MapContainer from '../MapContainer/MapContainer';

const Home = (props) => {
  return (
    <div data-test='app'>
      <h1 data-test='app-title'>Moovli</h1>
      <MapContainer
        onCountryChoice={props.onCountryChoice}
      />
    </div>
    );
}
 
export default Home;
