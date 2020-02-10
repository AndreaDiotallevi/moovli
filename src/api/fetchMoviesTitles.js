import movieTitlesJson from '../movieTitles.json';

const fetchMovieTitles = (country) => {
  return movieTitlesJson[country];
};

export default fetchMovieTitles;
