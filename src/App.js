import React, { Component } from 'react';
import './App.css';
import Home from './components/Home/Home';
import Movies from './components/Movies/Movies';
import movieTitlesJson from './movieTitles.json';

class App extends Component {
  state = {
    country: '',
    movies: []
  }

  handleCountryChoice = (t, map, coord) => {
    const { latLng } = coord;
    const lat = latLng.lat();
    const lng = latLng.lng();
    this.fetchCountry(lat, lng);
  }

  fetchCountry = (lat, lng) => {
    const apiKey = process.env.REACT_APP_GEO_CODE_API
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${apiKey}`
    fetch(url)
      .then(res => (res.ok ? res : Promise.reject(res)))
      .then(res => res.json())
      .then(res => {
        const country = res.results.slice(-1)[0].address_components[0].long_name;
        console.log(`Country choosen: ${country}`);
        this.setState({country});
      })
  }

  fetchMovies(country) {
    const apiKey = process.env.REACT_APP_MAPS_API
    movieTitlesJson['Italy'].map((title, index) => {
      // Fetch each title and save properties into objects
      // `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&page=1&include_adult=false&query=the-kite-runner`
    })
    const movies = [ // Hardcoded at the moment
      {"id": 1, "title": "Title 1"},
      {"id": 2, "title": "Title 2"}
    ]
    this.setState({movies})
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.country !== prevState.country) {
      this.fetchMovies(this.state.country);
    }
  }

  render() { 
    return (
      <div className='App'>
        {this.state.movies.length === 0 && <Home onCountryChoice={this.handleCountryChoice}/>}
        {this.state.movies.length !== 0 && <Movies movies={this.state.movies} country={this.state.country}/>}
      </div>
    );
  }
}

export default App;
