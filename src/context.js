import {useState, useEffect, useContext} from "react"
import { createContext } from "react"
import { useCallback } from "react"

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="

const AppContext = createContext()

const AppProvider = ({children}) => {
  const [loading, setLoading] = useState(true)
  const [searchTerm, setsearchTerm] = useState("a")
  const [cocktails, setCocktails] = useState([])

  return (
    <AppContext.Provider
       value = {{
        loading,
        searchTerm,
        cocktails,
        setsearchTerm,
       }}
    >
      {children}
  </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}