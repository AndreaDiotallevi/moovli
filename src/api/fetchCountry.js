import countryCodesJson from '../countryCodes.json';
const fetchCountry = (countryCode) => countryCodesJson[countryCode];
export default fetchCountry;
