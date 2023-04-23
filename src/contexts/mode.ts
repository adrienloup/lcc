import { createContext } from 'react'

export const Mode = createContext({
  mode: '',
  setMode: (_mode: string) => {},
})