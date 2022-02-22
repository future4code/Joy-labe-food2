import React, { createContext, useState } from "react"

export const GlobalState = createContext()

export const GlobalStorage = ({ children }) => {
  const [cart, setCart] = useState([])

  return (
    <GlobalState.Provider value={{ cart, setCart }}>
      {children}
    </GlobalState.Provider>
  )
}
