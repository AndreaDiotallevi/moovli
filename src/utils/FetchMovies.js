const geoCodeApiKey = process.env.REACT_APP_GEO_CODE_API;
const mapsApiKey = process.env.REACT_APP_MAPS_API;

const FetchMovies = () {
  // return fetch(
  //       `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${process.env.REACT_APP_GEO_CODE_API}`
  //       ).then(res => (res.ok ? res : Promise.reject(res))
  //       ).then(res => res.json())

}
//   fetch(
//     `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${process.env.REACT_APP_GEO_CODE_API}`
//     ).then(res => (res.ok ? res : Promise.reject(res)))
// .then(res => res.json())
// .then(res => {
//   const country = res.results[0].formatted_address.split(", ").slice(-1)[0].toUpperCase()
//   console.log(movies[country])
// })
// };


  // onClick(t, map, coord) {
  //   const { latLng } = coord;
  //   const lat = latLng.lat();
  //   const lng = latLng.lng();
  //   renderMovies(lat, lng)
  // }

  // const renderMovies = (lat, lng) => 
  // fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${process.env.REACT_APP_GEO_CODE_API}`)
  // .then(res => (res.ok ? res : Promise.reject(res)))
  // .then(res => res.json())
  // .then(res => console.log(res.results[0].formatted_address.split(", ").slice(-1)[0]))

  // search(term, location, sortBy) {
  //   return fetch(
  //     `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
  //     { headers: { Authorization: `Bearer ${apiKey}`} }
  //   ).then(response => {
  //     return response.json();
  //   }).then(jsonResponse => {
  //     if (jsonResponse.businesses) {
  //       return jsonResponse.businesses.map(business => {
  //         return {
  //           id: business['id'],
  //           imageSrc: business['image_url'],
  //           name: business['name'],
  //           address: business['address1'],
  //           city: business['city'],
  //           state: business['state'],
  //           zipCode: business['zip_code'],
  //           category: business['categories'][0]['title'],
  //           rating: business['rating'],
  //           reviewCount: business['review_count']
  //         }
  //       })
  //     }
  //   })
  // }
// };

export default FetchMovies;
