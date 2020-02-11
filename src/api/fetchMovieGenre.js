import movieGenres from '../movieGenres.json';

const fetchMovieGenre = (genreIds) => genreIds.map(genreId => movieGenres[genreId])

export default fetchMovieGenre;
