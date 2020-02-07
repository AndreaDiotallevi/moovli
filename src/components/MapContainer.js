import React, { Component } from 'react';
import { Map, InfoWindow, GoogleApiWrapper } from 'google-maps-react';

class MapContainer extends Component {
  onClick(t, map, coord) {
    const { latLng } = coord;
    const lat = latLng.lat();
    const lng = latLng.lng();
    console.log(lat, lng)
  }

  render() {
    return (
      <div>
        <Map
          google={this.props.google}
          zoom={4}
          onClick={this.onClick}
          initialCenter={{
            lat: 51.509865,
            lng: -0.118092,
          }}
        >
          <InfoWindow onClose={this.onInfoWindowClose} />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyASYegQUtea-hnik-mLh749REFM5DVS_iA',
})(MapContainer);
