function plug(
  user: number,
  duration: number,
  mobile: number,
  server: number
) {
  return Math.round(((((
    (((user * 12 * duration) / 60) * (1 - (mobile / 100))) / (220 * 7) * 75 + (((user * 12 * duration) / 60) * (mobile / 100)) / (365 * 4) * 30 + (((user * 12 * duration) / 60) * (1 - (mobile / 100))) / (220 * 7) * 30.8
    + (((user * 12 * duration) / 60) / (24 * 365)) * 150
    + (((450 * 365 * 24) / 1000) * (60 / 100)) * server * 1.8
  ) / (user * 12)) * 60) / 1250) * 60 * 60)
}

export default plug