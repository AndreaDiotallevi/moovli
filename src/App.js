import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import Moovies from './components/Moovies'

class App extends Component {
  state = {
    country: '',
    movies: []
  }

  handleChoice = (t, map, coord) => {
    console.log('Inside handleChoice()')
    // Fetch movies and country
    const country = 'Italy'
    const movies = [
      {id: 1, title: 'Title 1'},
      {id: 2, title: 'Title 2'}
    ];

    this.setState({movies});
    this.setState({country});
  }

  render() { 
    return (
      <div className='App'>
        {this.state.movies.length === 0 && <Home onChoice={this.handleChoice}/>}
        {this.state.movies.length !== 0 && <Moovies movies={this.state.movies} country={this.state.country}/>}
      </div>
    );
  }
}

export default App;
