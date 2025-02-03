import React from 'react'

export const WeatherInfo = ({ weatherObj }) => {
  


  if (!weatherObj){
    return (
      <div>Waiting for weather information...</div>
    )
  }

  return (
    <div>
      <h2>Weather in {weatherObj.name}</h2>
      <div>temperature {Math.round(weatherObj.main.temp - 273.15)} ºC</div>
      <img src={`https://openweathermap.org/img/wn/${weatherObj.weather[0].icon}@2x.png`} alt="" />
      <div>wind {weatherObj.wind.speed} m/s</div>
    </div>
  )
}
