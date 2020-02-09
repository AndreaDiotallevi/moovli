import fetchMovieData from './fetchMovieData'

const fetchMoviesData = (moviesTitles) => {
  moviesTitles.map(title => {
    fetchMovieData(title).then(response => {
      // console.log(response)
      return {
        id: response.results[0].id,
        title: response.results[0].title
      }
    })
  })
};

export default fetchMoviesData;
