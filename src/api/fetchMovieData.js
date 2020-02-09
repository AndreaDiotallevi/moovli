const fetchMovieData = (title) => {
  const API_KEY = process.env.REACT_APP_MOVIE_API;
  const titleUrl = title.toLowerCase().split(' ').join('-');
  return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${titleUrl}`
    ).then(response => response.json());
};

export default fetchMovieData;
