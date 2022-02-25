import React, { createContext, useState } from "react"

export const GlobalState = createContext()

export const GlobalStorage = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart"))
      ? JSON.parse(localStorage.getItem("cart"))
      : []
  )

  return (
    <GlobalState.Provider value={{ cart, setCart }}>
      {children}
    </GlobalState.Provider>
  )
}
