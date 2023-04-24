import { createContext } from 'react'

export const Data = createContext({
  data: { q1: 'q1', q2: 'q2', q3: 'q3' },
  setData: (_data: any) => {},
})