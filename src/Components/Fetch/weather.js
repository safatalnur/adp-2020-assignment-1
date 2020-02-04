import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ShowWeather from "../Fetch/showweather.js";
import weatherCartoon from "../App/weather-cartoon.jpg";

function Weather() {
      const { city } = useParams();
      const [data, setData] = useState("");

      //Fetch data from Open Weather Map Api
      useEffect(() => {
            async function fetchWeatherInfo() {
                  try {
                        const response = await fetch(
                              `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d4abfe2b3c74317aab5560c3bfcc01b5&units=metric`
                        );
                        const data = await response.json();
                        setData(data);
                  } catch (error) {
                        setError("Please enter city,Country");
                  }
            }

                  if (city !== "") {
                        fetchWeatherInfo();
                  }l
      }, []);

      if (!data) {
            return <p>loading...</p>;
      } else if (data.cod == 429) {
            return <p>Well I Broke the weather api</p>;
      } else {
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
                                          <h1>City: {city}</h1>
                                          <img
                                                src={weatherCartoon}
                                                alt="weather-cartoon"
                                                height="400"
                                                width="400"
                                          />
                                    </div>

                                    <ShowWeather
                                          city={data.name}
                                          country={data.sys.country}
                                          temp={data.main.temp}
                                          windchill={data.main.feels_like}
                                          mintemp={data.main.temp_min}
                                          maxtemp={data.main.temp_max}
                                          wind={data.wind.speed}
                                          sunrise={data.sys.sunrise}
                                          sunset={data.sys.sunset}
                                          desc={data.weather[0].description}
                                          icon={data.weather[0].icon}
                                    />
                              </div>
                        </div>
                  </div>
            );
      }
}

export default Weather;
