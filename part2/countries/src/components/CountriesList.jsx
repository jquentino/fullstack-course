import React from 'react'
import { Country } from './Country'


export const CountriesList = ({ countries, showAction}) => {
  const uid = () => {
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
  }

  if (countries.length > 10) {
    return <div>Too many matches, specify another filter</div>
  }

  return countries.map((countryName) => <Country
      key={uid()} // TODO: Try make this static (get info from server)
      value={countryName}
      showAction={showAction}
    />)
}
