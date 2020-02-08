import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import Moovies from './components/Moovies'

class App extends Component {
  state = {
    country: '',
    moovies: []
  }

  handleChoice = (lat, lng) => {
    // Fetch moovies and country
    const country = 'Italy';
    const moovies = [
      {id: 1, title: 'Title 1'},
      {id: 2, title: 'Title 2'}
    ];
    console.log(this.fetchCountry(lat, lng));
    this.setState({moovies});
    // this.setState({country});
  }

  fetchCountry = async (lat, lng) => {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${process.env.REACT_APP_GEO_CODE_API}`
    const res = await fetch(url);
    const res_1 = (res.ok ? res : Promise.reject(res));
    const res_2 = await res_1.json();
    return res_2.results[0].formatted_address.split(", ").slice(-1)[0];
  }

  render() { 
    return (
      <div className='App'>
        {this.state.moovies.length === 0 && <Home onChoice={this.handleChoice}/>}
        {this.state.moovies.length !== 0 && <Moovies moovies={this.state.moovies} country={this.state.country}/>}
      </div>
    );
  }
}

export default App;
