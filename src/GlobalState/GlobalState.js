import React, { createContext } from "react"

export const GlobalState = createContext()

export const GlobalStorage = ({ children }) => {
  return <GlobalState.Provider value={{}}>{children}</GlobalState.Provider>
}
