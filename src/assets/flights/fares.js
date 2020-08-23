export const falcon1 = () => {
  return {
    ["cross-orbit"]: 250,
    ["two-points-same-orbit"]: 50,
    ["satellites-landing"]: 200,
  };
};

export const falcon9 = (fares = falcon1()) => {
  const names = Object.keys(fares),
    cost = Object.values(fares).map((v, index) => names[index] !== "satellites-landing" ?  v * 2 : v);
    let prices = {};
  names.forEach((v, index) => {
    prices[v] = cost[index];
  });

  return prices;
};