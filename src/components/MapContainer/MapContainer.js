import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

// const renderMovies = (lat, lng) => 
// fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${process.env.REACT_APP_GEO_CODE_API}`)
// .then(res => (res.ok ? res : Promise.reject(res)))
// .then(res => res.json())
// .then(res => console.log(res.results[0].formatted_address.split(", ").slice(-1)[0]))

class MapContainer extends Component {
  onCountryChoice = (t, map, coord) => {
    this.props.onCountryChoice(t, map, coord);
  }

  render() {
    return (
      <div>
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
  apiKey: process.env.REACT_APP_MAPS_API,
})(MapContainer);