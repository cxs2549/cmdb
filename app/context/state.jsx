"use client"
import { createContext, useContext, useEffect, useState } from "react"

export const StateContext = createContext()

export default function StateProvider({ children }) {
  const [added, setAdded] = useState([])

  const state = { added, setAdded }

  useEffect(() => {
    const storedAdded = localStorage.getItem("added")
    if (storedAdded) {
      setAdded(JSON.parse(storedAdded))
    }
  }, [setAdded])

  return (
    <StateContext.Provider value={state}>
      {children}
    </StateContext.Provider>
  )
}

export function useStateContext() {
  return useContext(StateContext)
}
