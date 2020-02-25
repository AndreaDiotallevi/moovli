const fetchCountryCode = (lat, lng) => {
  const API_KEY = process.env.REACT_APP_LOCATION_API;
  return fetch(`https://us1.locationiq.com/v1/reverse.php?key=${API_KEY}&lat=${lat}&lon=${lng}&format=json`).then((response) => response.json());
};

export default fetchCountryCode;
