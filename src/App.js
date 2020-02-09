import React, { Component } from 'react';
import './App.css';
import Home from './components/Home/Home';
import Movies from './components/Movies/Movies';
import fetchCountry from './api/fetchCountry'
import fetchMovies from './api/fetchMovies'

class App extends Component {
  state = {
    country: '',
    movies: []
  }

  handleCountryChoice = (t, map, coord) => {
    fetchCountry(t, map, coord).then(data =>
      this.setState({country: data.results.slice(-1)[0].address_components[0].long_name})) // short_name in case we need country codes
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(`Country: ${this.state.country}`)
    if (this.state.country !== prevState.country) {
      const promises = fetchMovies(this.state.country);
      Promise.all(promises).then(movies => {
        this.setState({movies: movies.filter(movie => movie !== undefined)})
      })
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
