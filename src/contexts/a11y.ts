import { createContext } from 'react'

export const A11Y = createContext({
  a11y: '',
  setA11Y: (a11y: string) => { a11y },
})