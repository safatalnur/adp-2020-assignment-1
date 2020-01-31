import React, {useState} from 'react'
import Moment from 'moment'
import MomentTimeZone from 'moment-timezone'


const ShowWeather = props => (

      <div className="weather_data">
            {props.city && props.country && (
                  <p className="weather_key">
                        City : 
                        <span className="weather_value">
                              {props.city}, {props.country}
                        </span>
                  </p>
            )}

            {props.temp != null && (
                  <p className="weather_key">
                        Temperature : 
                        <span className="weather_value">
                              {props.temp}&deg;C
                        </span>
                  </p>
            )}

            {props.windchill != null && (
                  <p className="weather_key">
                        WindChill : 
                        <span className="weather_value">
                              {props.windchill}&deg;C
                        </span>
                  </p>
            )}

            {props.mintemp !=null && (
                  <p className="weather_key">
                        Min. Temperature : 
                        <span className="weather_value">
                              {props.mintemp}&deg;C
                        </span>
                  </p>
            )}

            {props.maxtemp !=null && (
                  <p className="weather_key">
                        Max. Temperature : 
                        <span className="weather_value">
                              {props.maxtemp}&deg;C
                        </span>
                  </p>
            )}

            {props.wind != null && (
                  <p className="weather_key">
                        Wind Speed : 
                        <span className="weather_value">
                              {props.wind}m/sec
                        </span>
                  </p>
            )}

            {props.sunrise != null && (
                 <p className="weather_key">
                        Sunrise : 
                        <span className="weather_value">
                             {
                                    Moment(props.sunrise*1000).format("h:mm:ss a")
                             } 
                        </span>
                  </p>
            )}

            {props.sunset != null && (
                  <p className="weather_key">
                        Sunset : 
                        <span className="weather_value">
                             {
                              Moment(props.sunset*1000).format("h:mm:ss a")
                             }
                        </span>
                  </p>
            )}

            {props.desc && (
                  <p className="weather_key">
                        Description : 
                        <span className="weather_value">
                              {props.desc}
                        </span>
                  </p>
            )}

            {props.icon && (
                  <p className="weather_key">
                        
                        <span className="weather_value">
                              <img src={`http://openweathermap.org/img/w/${props.icon}.png`} />
                        </span>
                  </p>
            )}

      </div>
      )

export default ShowWeather