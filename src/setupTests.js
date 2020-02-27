import '@testing-library/jest-dom/extend-expect';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import fetchCountryCode from './api/__mocks__/fetchCountryCode';
import fetchMovieData from './api/__mocks__/fetchMovieData';
import fetchMovies from './api/__mocks__/fetchMovies';
import fetchCoordinates from './api/__mocks__/fetchCoordinates';

Enzyme.configure({ adapter: new Adapter() });
