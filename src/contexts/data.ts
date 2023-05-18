import { createContext } from 'react'

export const DataContext = createContext({
  data: {
    name: 'Site Web',
    visitor: 2500,
    duration: 3,
    userlocated: 'fr',
    mobile: 70,
    page: 5,
    server: 2,
    serverlocated: 'eu',
    scores: []
  },
  setData: (data: {
    name: string,
    visitor: number,
    duration: number,
    userlocated: string,
    mobile: number,
    page: number,
    server: number,
    serverlocated: string,
    scores: number[]
  }) => { data }
})
