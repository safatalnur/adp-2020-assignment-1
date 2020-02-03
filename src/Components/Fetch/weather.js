import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import ShowWeather from '../Fetch/showweather.js'
import weatherCartoon from "../App/weather-cartoon.jpg"

function Weather() {
      const {city} = useParams()
      // const {country} = useParams()
      const [data, setData] = useState('')

      // const [search, setSearch] = useState('')
      // const [query, setQuery] = useState('')
      // const [error, setError] = useState(null)


      // const [country, setCountry] = useState(null)
      // const [timezone, setTimezone] = useState(null)
      // const [temp, setTemp] = useState(null)
      // const [windchill, setWindchill] = useState(null)
      // const [mintemp, setMintemp] = useState(null)
      // const [maxtemp, setMaxtemp] = useState(null)
      // const [wind, setWind] = useState(null)
      // const [sunset, setSunset] = useState(null)
      // const [sunrise, setSunrise] = useState(null)
      // const [desc, setDesc] = useState(null)
      // const [icon, setIcon] = useState()

 
      


useEffect (() => {

      async function fetchWeatherInfo() {
            try {
                  const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d4abfe2b3c74317aab5560c3bfcc01b5&units=metric`)
                  const data = await response.json()
                  setData(data)

                        // setCity(data.name)
                        // setCountry(data.sys.country)
                        // setTemp(data.main.temp)
                        // setWindchill(data.main.feels_like)
                        // setMintemp(data.main.temp_min)
                        // setMaxtemp(data.main.temp_max)
                        // setWind(data.wind.speed)
                        // setSunrise(data.sys.sunrise)
                        // setSunset(data.sys.sunset)
                        // setTimezone(data.timezone)
                        // setDesc(data.weather[0].description)
                        // setIcon(data.weather[0].icon)

            } catch(error) {
                  setError("Please enter city,CountryAbb")
            }
      }
            
      if (city !== '') {
            fetchWeatherInfo()
      }
}, [])

      
if(!data){
      return(
            <p>loading...</p>
      )
      
}else if(data.cod == 429){
      return(
            <p>Well I Broke the weather api</p>
      )
}else{
      console.log(data);
      
return (
      <div>
            <div className="weatherBodyContainer">
                  <div className="weatherHeader">
                        <a href="../">
                              <h1>WORLDWIDE WEATHER</h1>
                              <h3>Click here to enter another city</h3>
                        </a>
                  </div>

                  <div className="weatherBodyBox">
                        <div className="cityName">
                              <h1>City: {city} </h1>
                              <img src={weatherCartoon} alt="weather-cartoon" height="400" width="400"/>
                        </div>

                  <ShowWeather
                        city = {data.name}
                              country = {data.sys.country}
                              temp = {data.main.temp}
                              windchill = {data.main.feels_like}
                              mintemp = {data.main.temp_min}
                              maxtemp = {data.main.temp_max}
                              wind = {data.wind.speed}
                              sunrise = {data.sys.sunrise}
                              sunset = {data.sys.sunset}
                              desc = {data.weather[0].description}
                              icon = {data.weather[0].icon}
                  />
                        </div>
                  </div>
      </div>
            )
      }
}

export default Weather