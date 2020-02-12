import React, { Component } from 'react';
import './App.css';
import Home from './components/Home/Home';
import Movies from './components/Movies/Movies';
import fetchCountry from './api/fetchCountry'
import fetchMovies from './api/fetchMovies'

class App extends Component {
  state = {
    country: '',
    movies: [],
    noMovie: null,
    onClickCoordLat: null,
    onClickCoordLng: null
  }

  handleCountryChoice = (t, map, coord) => {
    fetchCountry(t, map, coord)
      .then(response => {
        const country = response.results.slice(-1)[0].address_components[0].long_name;
        this.setState({country});
        console.log('Country: ', country);
        this.setState({noMovies: null})
        return this.state.country;
          }).then(country => Promise.all(fetchMovies(country))
            ).then(response => {
              const movies = response.filter(movie => movie !== undefined);
              this.setState({movies});
              console.log('Movies: ', movies);
            })
        .catch(error => {
          console.log('Error caught')
          const { latLng } = coord;
          const lat = latLng.lat();
          const lng = latLng.lng();
          this.setState({noMovies: true})
          this.setState({onClickCoordLat: lat})
          this.setState({onClickCoordLng: lng})
        })
      
      
  }

  handleBackToHome = () => {
    this.setState({movies: []});
  }

  render() {
    return (
      <div className='App'>
        {this.state.movies.length === 0 && <Home onCountryChoice={this.handleCountryChoice} noMovies={this.state.noMovies} onClickCoordLat={this.state.onClickCoordLat}  onClickCoordLng={this.state.onClickCoordLng}/>}
        {this.state.movies.length !== 0 && <Movies movies={this.state.movies} country={this.state.country} onBackToHome={this.handleBackToHome}/>}
      </div>
    );
  }
}

export default App;
