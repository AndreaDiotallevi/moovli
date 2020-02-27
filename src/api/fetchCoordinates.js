const fetchCoordinates = (t, map, coord) => {
  const { latLng } = coord;
  const lat = latLng.lat();
  const lng = latLng.lng();
  return [lat, lng];
}

export default fetchCoordinates;
