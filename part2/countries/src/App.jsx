import { useEffect, useState } from 'react'
import { FindInput } from './components/FindInput'
import { CountriesList } from './components/CountriesList'
import countryService from './services/countries'
import './App.css'

function App() {
  const [inputCountry, setInputCountry] = useState('')
  const [countriesList, setCountryNames] = useState(null)

  useEffect(
      () => {
        countryService.getAll()
          .then(
            (data) => setCountryNames(data)
            // (data) => {setCountryNames(data.map((country) => country.name.common))}
          )
      }
  , {})

  if (!countriesList) {
    return null
  }

  console.log(countriesList)

  const handleInputChange = (event) => {
    setInputCountry(event.target.value)
    console.log(inputCountry)
  }

  return (
    <div>
      <FindInput inputValue={inputCountry} handleInputFunc={handleInputChange}/>

      <CountriesList countries={countriesList} searchString={inputCountry}/>
    </div>
  )
}

export default App
