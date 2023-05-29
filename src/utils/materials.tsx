function materials(
  user: number,
  duration: number,
  mobile: number,
  server: number,
) {
  return ((
    (((user * 12 * duration) / 60) * (1 - (mobile / 100))) / (220 * 7) * (572 / 5) + (((user * 12 * duration) / 60) * (mobile / 100)) / (365 * 4) * (572 / 5) + (((user * 12 * duration) / 60) * (1 - (mobile / 100))) / (220 * 7) * (1689 / 5)
    + (((user * 12 * duration) / 60) / (24 * 365)) * (425 / 5)
    + server * (2288 / 5)
  ) / 1000).toFixed(2)
}

export default materials