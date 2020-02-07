import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

class MapContainer extends Component {
  render() {
    return (
     <div>
       < Map
         google={this.props.google}
         zoom={4}
         initialCenter={{
         lat: 51.509865,
         lng: -0.118092
         }}
       >
       <InfoWindow onClose={this.onInfoWindowClose}>
       </InfoWindow>
       </Map>
    </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey:"AIzaSyASYegQUtea-hnik-mLh749REFM5DVS_iA"
})(MapContainer)