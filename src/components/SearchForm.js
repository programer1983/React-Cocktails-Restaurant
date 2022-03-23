import {useGlobalContext} from "./../context"


const SearchForm = () => {
  const {setSearchTerm} = useGlobalContext()


  return (
    <h2>SearchForm</h2>
  )
}

export default SearchForm