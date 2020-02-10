import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

class MapContainer extends Component {
  onCountryChoice = (t, map, coord) => {
    this.props.onCountryChoice(t, map, coord);
  }

  render() {
    return (
      <div data-test='map-container'>
        <Map
          google={this.props.google}
          zoom={4}
          onClick={this.onCountryChoice}
          initialCenter={{
            lat: 51.509865,
            lng: -0.118092,
          }}
        >
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GEO_CODE_API,
})(MapContainer);
