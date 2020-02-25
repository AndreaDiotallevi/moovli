import fetchMovieData from './fetchMovieData';
import movieTitlesJson from '../movieTitles.json';

const fetchMovies = (country) => {
  const moviesTitles = movieTitlesJson[country];
  return moviesTitles.map(async (title) => await fetchMovieData(title).then((response) => {
    if (response.imdbID !== undefined) {
      return {
        imdbID: response.imdbID,
        title: response.Title,
        plot: response.Plot,
        releaseDate: response.Released,
        imdbRating: response.imdbRating,
        posterURL: response.Poster,
        genreList: response.Genre.split(', '),
      };
    }
  }));
};

export default fetchMovies;
