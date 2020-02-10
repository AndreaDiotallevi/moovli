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
        releaseDate: response.results[0].release_date
      };
    }
  }));
};

export default fetchMovies;
