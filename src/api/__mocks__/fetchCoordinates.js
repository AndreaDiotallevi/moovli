const fetchCoordinates = (t, map, coord) => {
  if (coord == "Poland coordinates") {
    return ["PolandLat", "PolandLng"];
  } else if (coord == "Benin coordinates") {
    return ["BeninLat", "BeninLng"];
  }
}

export default fetchCoordinates;
