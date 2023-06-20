import { useState, useEffect } from 'react'
import cities from 'cities.json'
import { TextField } from '@mui/material'







export default function SelectCity({ onCitySelected }) {
  const nameCity = cities.filter((e) => e.country === 'ES').map((e) => e.name)
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState([])


const listFilter = () => {
  const res = nameCity.filter((item) => item.toLowerCase().includes(search.toLowerCase()))
  setFilter(res)
}


  useEffect(() => {
    listFilter()
  }, [search])


  
const handleSearch = (e) => {
  const value = e.target.value
  setSearch(value)
  handleCitySelection(search)
  
}

  const handleCitySelection = (city) => {
    onCitySelected(city)
  }


  return (
    <>
      <TextField
        className="input-createCommunity"
        style={{
          position: 'absolute',
          width: ' 326px',
          left: '32px',
          top: '244px',
        }}
        value={search}
        label={search <= 0 ? 'City' : filter}
        variant="filled"
        onChange={handleSearch}
        // Aquí se pasa la información de búsqueda al componente padre cuando se hace clic en el campo de texto
      />
    </>
  )
}
