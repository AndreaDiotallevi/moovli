import React, { Component } from 'react';
import './App.css';
import Home from './components/Home/Home';
import Movies from './components/Movies/Movies';
import fetchCountryCode from './api/fetchCountryCode'
import fetchCountry from './api/fetchCountry'
import fetchMovies from './api/fetchMovies'

class App extends Component {
  state = {
    country: '',
    movies: [],
    infoWindowVisibile: false,
    onClickCoordLatLng: []
  }

  handleCountryChoice = (t, map, coord) => {
    fetchCountryCode(t, map, coord)
      .then(response => {
        console.log(response)
        const countryCode = response.address.country_code;
        const country = fetchCountry(countryCode);
        this.setState({country, infoWindowVisibile: false});
        console.log('Country: ', country);
        return this.state.country;
          }).then(country => Promise.all(fetchMovies(country))
            ).then(response => {
              console.log(response);
              const movies = response.filter(movie => movie !== undefined);
              this.setState({movies});
              console.log('Movies: ', movies);
            })
      .catch(error => {
        console.log('Error caught')
        const { latLng } = coord;
        const lat = latLng.lat();
        const lng = latLng.lng();
        this.setState({infoWindowVisibile: true});
        this.setState({onClickCoordLatLng: [lat, lng]});
      })
  }

  handleBackToHome = () => {
    this.setState({movies: [], infoWindowVisibile: false});
  }

  render() {
    return (
      <div className='App'>
        {this.state.movies.length === 0 && <Home onCountryChoice={this.handleCountryChoice} infoWindowVisibile={this.state.infoWindowVisibile} onClickCoordLatLng={this.state.onClickCoordLatLng}/>}
        {this.state.movies.length !== 0 && <Movies movies={this.state.movies} country={this.state.country} onBackToHome={this.handleBackToHome}/>}
      </div>
    );
  }
}

export default App;
