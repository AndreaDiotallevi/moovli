import React, { Component } from 'react';
import { Map, InfoWindow, GoogleApiWrapper } from 'google-maps-react';


const renderMovies = (lat, lng) => 
fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyC6o-ZPlBBauC5BNQpwsOyOWknKd63QCWY`)
.then(res => (res.ok ? res : Promise.reject(res)))
.then(res => res.json())
.then(res => console.log(res.results[0].formatted_address.split(", ").slice(-1)[0]))

class MapContainer extends Component {
  onClick(t, map, coord) {
    const { latLng } = coord;
    const lat = latLng.lat();
    const lng = latLng.lng();
    renderMovies(lat, lng)
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
