import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import ShowWeather from '../Fetch/showweather.js'


function Weather() {

      const [search, setSearch] = useState('')
      const [query, setQuery] = useState('')
      const [data, setData] = useState('')
      const [error, setError] = useState(null)
      const [country, setCountry] = useState(null)
      const [temp, setTemp] = useState(null)
      const [windchill, setWindchill] = useState(null)
      const [mintemp, setMintemp] = useState(null)
      const [maxtemp, setMaxtemp] = useState(null)
      const [wind, setWind] = useState(null)
      const [sunset, setSunset] = useState(null)
      const [sunrise, setSunrise] = useState(null)
      const [desc, setDesc] = useState(null)
      const [icon, setIcon] = useState()
      const {city} = useParams()
      


      useEffect (() => {

            async function fetchWeatherInfo() {
                  try {
                        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=70d2c07e6b32015a291efb7231eb5f74&units=metric`)
                        const data = await response.json()

                        // setCity(data.name)
                        setCountry(data.sys.country)
                        setTemp(data.main.temp)
                        setWindchill(data.main.feels_like)
                        setMintemp(data.main.temp_min)
                        setMaxtemp(data.main.temp_max)
                        setWind(data.wind.speed)
                        setSunrise(data.sys.sunrise)
                        setSunset(data.sys.sunset)
                        setDesc(data.weather[0].description)
                        setIcon(data.weather[0].icon)

                        console.log(data)


                  } catch(error) {
                        setError("Please enter city,CountryAbb")
                        setCity("")
                  }
            }
            if (city !== '') {
                  fetchWeatherInfo()
            }
      }, [query])

      return (
            <div className="weatherInfo">
                  <ShowWeather
                        city = {city}
                        country = {country}
                        temp = {temp}
                        windchill = {windchill}
                        mintemp = {mintemp}
                        maxtemp = {maxtemp}
                        wind = {wind}
                        sunrise = {sunrise}
                        sunset = {sunset}
                        desc = {desc}
                        icon = {icon}
                  />
            </div>

      )


}

export default Weather