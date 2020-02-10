const fetchCountry = (t, map, coord) => {
  const API_KEY = process.env.REACT_APP_GEO_CODE_API;
  const {latLng} = coord;
  const lat = latLng.lat();
  const lng = latLng.lng();
  return fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${API_KEY}`
    ).then(response => response.json());
};

export default fetchCountry;
