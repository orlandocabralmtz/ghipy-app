import { useState } from 'react'
const SearchBar = ({ handleSearch }) => { // funcion para saber que hará cuando haga la busqueda
  // estado que almacenara lo que el usuario escriba en el input
  const [search, setSearch] = useState('')
  return (
    <div className='search-bar'>
      <input
        type='text'
        placeholder='Search'
        name='search'
        value={search}
        onChange={(e) => setSearch(e.target.value)} //  cada vez que el usuario escriba algo se actualiza el estado en la variable search.
      />
      <button
        className='search-button'
        onClick={() => handleSearch(search)}// hace la busqueda en base a lo que el usuario escriba
      >
        Buscar
      </button>
    </div>
  )
}
export default SearchBar
