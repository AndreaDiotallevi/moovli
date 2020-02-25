const fetchMovies = (country) => {
  return [Promise.resolve({
    imdbID: 1,
    title: 'title',
    releaseDate: '2020-01-01',
    genreList: ['Comedy'],
    plot: 'plot',
    posterURL: 'https://image.tmdb.org/t/p/w400/dom2esWWW8C9jS2v7dOhW48LwHh.jpg',
    imdbRating: 9.5
  })]
};

export default fetchMovies;
