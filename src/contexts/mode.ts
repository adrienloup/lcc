import { createContext } from 'react'

export const Mode = createContext({
  mode: '',
  setMode: (mode: string) => { mode },
})