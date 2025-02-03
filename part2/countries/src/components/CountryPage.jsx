import React from 'react'

export const CountryPage = ({ countryObj}) => {
  return (
    <div>
      <h1>{countryObj.name.common}</h1>
      <div>Capital: {countryObj.capital}</div>
      <div>Area: {countryObj.area} km²</div>
      <h3>Languages:</h3>
      <ul>
        {Object.entries(countryObj.languages).map(([key, lang]) => <li key={key}>{lang}</li>)}
      </ul>
      <img src={countryObj.flags.png} alt={countryObj.flags.alt} />
    </div>
  )
}
