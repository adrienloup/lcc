import energetic from './energetic'

function gas(
  user: number,
  duration: number,
  userlocated: string,
  mobile: number,
  page: number,
  server: number,
  serverlocated: string
  ) {  
    return ((
      (((user * 12 * duration) / 60) * (1 - (mobile / 100))) / (220 * 7) * 75 * energetic(userlocated) + (((user * 12 * duration) / 60) * (mobile / 100)) / (365 * 4) * 30 * energetic(userlocated) + (((user * 12 * duration) / 60) * (1 - (mobile / 100))) / (220 * 7) * 30.8 * energetic(userlocated) + (((user * 12 * duration) / 60) * (1 - (mobile / 100))) / (220 * 7) * (189 / 5) + (((user * 12 * duration) / 60) * (mobile / 100)) / (365 * 4) * (169 / 4) + (((user * 12 * duration) / 60) * (1 - (mobile / 100))) / (220 * 7) * (265 / 6)
      + (((user * 12 * duration) / 60) / (24 * 365)) * 150 * energetic(userlocated) + (((user * 12 * duration) / 60) / (24 * 365)) * (83 / 5) + user * 12 * page * 2.1 / 1024 * (0.002)
      + (((450 * 365 * 24) / 1000) * 0.6) * server * 1.8 * energetic(serverlocated) + server * (756 / 5)
    ) / 1000).toFixed(2)
}

export default gas