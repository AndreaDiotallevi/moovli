import fetchMovieData from './fetchMovieData';
import fetchMoviesTitles from './fetchMoviesTitles';

const fetchMovies = (country) => {
  const moviesTitles = fetchMoviesTitles(country);
  return moviesTitles.map(async (title) => await fetchMovieData(title).then((response) => {
    if (response.results.length > 0) {
      return {
        id: response.results[0].id,
        title: response.results[0].title,
        overview: response.results[0].overview,
        releaseDate: response.results[0].release_date,
        voteAverage: response.results[0].vote_average,
        posterUrl: `https://image.tmdb.org/t/p/w200${response.results[0].poster_path}`
      };
    }
  }));
};

export default fetchMovies;
