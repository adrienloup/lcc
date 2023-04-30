import { createContext } from 'react'

export const Data = createContext({
  data: {
    q1: 'Site Web',
    q2: '2500',
    q3: '3',
    q4: 'fr',
    q5: '70',
    q6: '5',
    q7: '2',
    q8: 'eu'
  },
  setData: (data: {
    q1: string,
    q2: string,
    q3: string,
    q4: string,
    q5: string,
    q6: string,
    q7: string,
    q8: string
  }) => { data },
})