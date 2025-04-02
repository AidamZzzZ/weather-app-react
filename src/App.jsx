import { useState } from "react"
import cityService from "./services/citys"
import SearchCity from "./components/SearchCity"
import { Weather, Table } from "./components/Weather"
const url = `http://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_API_KEY}&lang=en&q=`

const App = () => {
  const [inputCity, setInputCity] = useState('')
  const [error, setError] = useState('')
  const [city, setCity] = useState(null)

  const handleSearchCity = (e) => {
    e.preventDefault()

    if (inputCity.trim() === "") {
      setError("Search a countrie...")
      setCity(null)
    } else {
      cityService
        .getcity(url, inputCity)
        .then(response => {
          setError("")
          setCity(response)
        })
        .catch(error => {
          setError("Search a valid countrie.")
          setCity(null)
        })
    }
  }

  const handleInputCity = (e) => {
    setInputCity(e.target.value)
  }

  return (
    <>
      <h1 className="text-center text-4xl font-bold m-5 text-white">Weather App</h1>
      
      {error && <p className="text-red-500 font-bold text-center text-xl">{error}</p>}
      <SearchCity
        onSearch={handleSearchCity}
        onInputCity={handleInputCity}
      />

      {city && <Table>
        <Weather 
          countrie={city}
        />
      </Table>}
    </>
  )
}

export default App
