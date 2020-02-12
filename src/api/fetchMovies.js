import fetchMovieData from './fetchMovieData';
import fetchMoviesTitles from './fetchMoviesTitles';
import fetchMovieGenre from './fetchMovieGenre'

const fetchMovies = (country) => {
  const moviesTitles = fetchMoviesTitles(country);
  return moviesTitles.map(async (title) => await fetchMovieData(title).then((response) => {
    if (response.results.length > 0 && response.results[0].vote_average > 0 && response.results[0].poster_path != null) {
      return {
        id: response.results[0].id,
        title: response.results[0].title,
        overview: response.results[0].overview,
        releaseDate: response.results[0].release_date,
        voteAverage: response.results[0].vote_average,
        posterUrl: `https://image.tmdb.org/t/p/w400${response.results[0].poster_path}`,
        genreList: fetchMovieGenre(response.results[0].genre_ids)
      };
    }
  }));
};

export default fetchMovies;
