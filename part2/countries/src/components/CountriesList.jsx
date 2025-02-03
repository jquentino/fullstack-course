import React from 'react'
import { Country } from './Country'
import { CountryPage } from './CountryPage';


export const CountriesList = ({ countries, searchString }) => {
  const uid = () => {
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
  }

  let countriesToShow = countries
  if (searchString) {
    countriesToShow = countries.filter(
      (country) => {return country.name.common.toLowerCase().includes(searchString.toLowerCase())}
    )

  }

  if (countriesToShow.length > 10) {
    return <div>Too many matches, specify another filter</div>
  }
  
  if (countriesToShow.length === 1) {
    return <CountryPage countryObj={countriesToShow[0]}/>
  }


  return countriesToShow.map((countryInfo) => <Country
      key={uid()} // TODO: Try make this static (get info from server)
      value={countryInfo.name.common}
    />)
}
