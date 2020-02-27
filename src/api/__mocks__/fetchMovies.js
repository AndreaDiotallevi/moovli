const fetchMovies = (country) => {
  if (country == "Poland") {
    return [Promise.resolve({
      imdbID: 1,
      title: 'Title',
      releaseDate: '2020-01-01',
      genreList: ['Comedy'],
      plot: 'Plot',
      posterURL: 'https://image.tmdb.org/t/p/w400/dom2esWWW8C9jS2v7dOhW48LwHh.jpg',
      imdbRating: 9.5
    })]
  } else if (country == "Benin") {
    return [Promise.reject()]
  }
};

export default fetchMovies;
