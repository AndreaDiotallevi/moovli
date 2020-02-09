import React, { Component } from 'react';
import './App.css';
import Home from './components/Home/Home';
import Moovies from './components/Moovies/Moovies';
import moovieTitlesJson from './moovies.json';

class App extends Component {
  state = {
    country: '',
    moovies: []
  }

  handleCountryChoice = (t, map, coord) => {
    const { latLng } = coord;
    const lat = latLng.lat();
    const lng = latLng.lng();
    this.fetchCountry(lat, lng);
  }

  fetchCountry = (lat, lng) => {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${process.env.REACT_APP_GEO_CODE_API}`
    fetch(url)
      .then(res => (res.ok ? res : Promise.reject(res)))
      .then(res => res.json())
      .then(res => {
        const country = res.results.slice(-1)[0].address_components[0].long_name;
        console.log(`Country choosen: ${country}`);
        this.setState({country: country});
      })
  }

  fetchMovies(country) {
    moovieTitlesJson['Italy'].map((title, index) => {
      // Fetch each title and save properties into objects
    })
    const moovies = [
      {"id": 1, "title": "Title 1"},
      {"id": 2, "title": "Title 2"}
    ]
    this.setState({moovies: moovies})
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.country !== prevState.country) {
      this.fetchMovies(this.state.country);
    }
  }

  render() { 
    return (
      <div className='App'>
        {this.state.moovies.length === 0 && <Home onCountryChoice={this.handleCountryChoice}/>}
        {this.state.moovies.length !== 0 && <Moovies moovies={this.state.moovies} country={this.state.country}/>}
      </div>
    );
  }
}

export default App;
