import React, { Component } from 'react';
import  MapContainer from './MapContainer.js';

class Home extends Component {
  render() {
    return (
    <div className="App">
      <h1>Moovli</h1>
      <MapContainer/>
    </div>
    );
  }
}

export default Home;