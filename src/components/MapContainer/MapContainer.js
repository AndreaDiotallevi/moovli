import React, { Component } from 'react';
import { Map, InfoWindow, GoogleApiWrapper } from 'google-maps-react';

class MapContainer extends Component {
  render() {
    return (
        <Map
          google={this.props.google}
          zoom={4}
          onClick={this.props.onCountryChoice}
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
                <h4>There are no movies for this country</h4>
              </div>
          </InfoWindow>
        </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_MAPS_API,
})(MapContainer);
