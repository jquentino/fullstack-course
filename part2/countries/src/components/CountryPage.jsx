import React from 'react'

export const CountryPage = ({ countryObj }) => {
  return (
    <div>
      <h1>{countryObj.name.common}</h1>
      <div>capital {countryObj.capital}</div>
      <div>area {countryObj.area}</div>
      <h3>languages:</h3>
      <ul>
        {Object.entries(countryObj.languages).map(([key, lang]) => <li key={key}>{lang}</li>)}
      </ul>
      <img src={countryObj.flags.png} alt={countryObj.flags.alt} />
    </div>
  )
}
