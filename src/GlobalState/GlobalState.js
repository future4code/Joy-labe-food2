import React, { createContext, useState } from "react"
import useRequestData from "../hooks/useRequestData"

export const GlobalState = createContext()

export const GlobalStorage = ({ children }) => {
  const [cart, setCart] = useState([])

  return (
    <GlobalState.Provider value={{ cart, setCart }}>
      {children}
    </GlobalState.Provider>
  )
}
