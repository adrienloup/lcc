function energetic(local: string) {
  const energetic: { [key: string]: any } = {
    eu: 0.5,
    fr: 0.1,
    as: 1,
    oc: 0.8,
    na: 0.4,
    sa: 0.5,
    ww: 0.5
  }
  return energetic[local]
}

export default energetic