export const destinations = {
  abuja: {
    type: "natural",
    orbit: "earth",
  },
  spock: {
    type: "natural",
    orbit: "mars",
  },
  iss: {
    type: "man-made",
    orbit: "earth",
    royalty: 200,
  },
  moon: {
    type: "natural",
    orbit: "earth",
  },
};

export const flightCost = (station, vehicle, destination) =>
  vehicle()[
    station.orbit !== destination.orbit
      ? "two-points-same-orbit"
      : "cross-orbit"
  ];