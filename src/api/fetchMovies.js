import fetchMovieData from './fetchMovieData';
import fetchMoviesTitles from './fetchMoviesTitles';

const fetchMovies = (country) => {
  const moviesTitles = fetchMoviesTitles(country);
  return moviesTitles.map(async (title) => await fetchMovieData(title).then((response) => {
    if (response.imdbID !== undefined) {
      return {
        imdbID: response.imdbID,
        title: response.Title,
        releaseDate: response.Released,
        genreList: response.Genre.split(', '),
        plot: response.Plot,
        posterURL: response.Poster,
        imdbRating: response.imdbRating,
      };
    }
  }));
};

export default fetchMovies;
