const fetchCountryCode = (lat, lng) => {
  if (lat == "PolandLat") {
    return Promise.resolve({
      "address": { "country_code": "pl" }
    })
  } else if (lat == "BeninLat") {
    return Promise.resolve({
      "address": { "country_code": "bj" }
    })
  }
};

export default fetchCountryCode;
