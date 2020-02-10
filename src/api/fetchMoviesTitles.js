import movieTitlesJson from '../movieTitles.json';

const fetchMovieTitles = (country) => movieTitlesJson[country];

export default fetchMovieTitles;
