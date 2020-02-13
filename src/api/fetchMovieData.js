const fetchMovieData = async (title) => {
  const API_KEY = process.env.REACT_APP_OMDB_API;
  const titleUrl = title.toLowerCase().split(' ').join('-');
  return await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&t=${titleUrl}`).then((response) => response.json());
};

export default fetchMovieData;
