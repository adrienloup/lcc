function glass(
    user: number,
    page: number
  ) {
  return (((user * 12 * 6 * page) / 100) / (user * 12) / 0.18).toFixed(1)
}

export default glass