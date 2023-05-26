function watter(
    user: number,
    page: number
  ) {
  return Math.round((user * 12 * 6 * page) / 100)
}

export default watter