import {useState, useEffect, useContext} from "react"
import { createContext } from "react"
import { useCallback } from "react"

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="

const AppContext = createContext()

const AppProvider = ({children}) => {

  return (
    <AppContext.Provider
       value = "hello"
    >
      {children}
  </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}