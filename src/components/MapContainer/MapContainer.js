import React, { Component } from 'react';
import { Map, InfoWindow, GoogleApiWrapper } from 'google-maps-react';

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
        <InfoWindow
          position = {{
            lat: (this.props.onClickCoordLatLng[0]),
            lng: (this.props.onClickCoordLatLng[1]),
          }}
          visible={this.props.infoWindowVisibile}>
            <div>
              <h1>There are no movies for this country</h1>
            </div>
        </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_MAPS_API,
})(MapContainer);
