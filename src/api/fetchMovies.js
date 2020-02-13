import fetchMovieData from './fetchMovieData';
import fetchMoviesTitles from './fetchMoviesTitles';

const fetchMovies = (country) => {
  const moviesTitles = fetchMoviesTitles(country);
  return moviesTitles.map(async (title) => await fetchMovieData(title).then((response) => {
    if (response.Poster !== "N/A" && response.imdbID !== undefined && response.imdbRating !== undefined) {
      return {
        imdbID: response.imdbID,
        title: response.Title,
        releaseDate: response.Released,
        genreList: response.Genre.split(", "),
        director: response.Director,
        writer: response.Writer,
        actors: response.Actors,
        plot: response.Plot,
        country: response.Country,
        awards: response.Awards,
        posterURL: response.Poster,
        imdbRating: response.imdbRating,
        production: response.Production
      };
    }
  }));
};

export default fetchMovies;
