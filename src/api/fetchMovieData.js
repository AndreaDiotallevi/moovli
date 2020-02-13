const fetchMovieData = async (title) => {
  const API_KEY = process.env.REACT_APP_OMDB_API;
  const titleUrl = title.toLowerCase().split(' ').join('-');
  return await fetch(`http://www.omdbapi.com/?apikey=63d9b3b1&t=${titleUrl}`).then((response) => response.json());
};

export default fetchMovieData;
