import { useEffect, useState } from 'react'
import { FindInput } from './components/FindInput'
import { CountriesList } from './components/CountriesList'
import countryService from './services/countries'
import './App.css'
import { CountryPage } from './components/CountryPage'
import { Country } from './components/Country'
import { WeatherInfo } from './components/WeatherInfo'

function App() {
  const [inputCountry, setInputCountry] = useState('')
  const [allCountries, setAllCountryNames] = useState(null)
  const [currentCountry, setCurrentCountry] = useState(null)
  const [countriesToShow, setCountriesToShow] = useState([])
  const [weatherInfo, setWeatherInfo] = useState(null)

  useEffect( // Get all country names from api in first render
      () => {
        countryService.getAll()
          .then(
            (data) => {setAllCountryNames(data.map((country) => country.name.common))}
          )
      }
  , [])

  useEffect( // Update countries to show based on user search input
    () => {
      if (allCountries){
        
        const countriesToShowCopy = allCountries.filter(
          (country) => {return country.toLowerCase().includes(inputCountry.toLowerCase())}
        )
        setCountriesToShow(countriesToShowCopy)

        if (countriesToShowCopy.length != 1){
          setCurrentCountry(null)
        }
      }
    }
  , [inputCountry])

  useEffect( // Control what Country Page will be showed if countries contains one single item
    () => {
      if (countriesToShow !== null && countriesToShow.length == 1){
        ShowCountry(countriesToShow[0])
      }
    }
    , [countriesToShow])

  if (!allCountries) {
      return null
  }

  const handleInputChange = (event) => {
    setInputCountry(event.target.value)
  }

  const ShowCountry = (countryName) => {
    // Just update if contryName is not equal to curretCountry
    if (currentCountry !== null && currentCountry.name.common.toLowerCase() == countryName.toLowerCase()){
      return
    }

    countryService.getCountry(countryName.toLowerCase()).
    then(
      (data) => {
        setCurrentCountry(data)
        countryService.getWeather(data.capital)
        .then(
          (data) => setWeatherInfo(data)
        )
      }
    )
  }

  if (!currentCountry){
    return (
      <div>
        <FindInput inputValue={inputCountry} handleInputFunc={handleInputChange}/>
        <CountriesList countries={countriesToShow} showAction={ShowCountry}/>
      </div>
    )
  }

  return (
    <div>
      <FindInput inputValue={inputCountry} handleInputFunc={handleInputChange}/>
      <CountryPage countryObj={currentCountry}/>
      <WeatherInfo weatherObj={weatherInfo}/>
    </div>
  )
}

export default App
