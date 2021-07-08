import React from 'react';
import '../../css/weather.css';

const Weather = ({weatherData}) => {
    const location = "Glasgow";
    const description = weatherData.weather[0].description;
    const max = Math.round(weatherData.main.temp_max) - 273;
    const min = Math.round(weatherData.main.temp_min) - 273;
    const iconCode = weatherData.weather[0].icon+".png";
    const weatherIcon = "http://openweathermap.org/img/w/"+iconCode;
    return(
    <div id="weather-widget">
        {
        (weatherData.weather[0].main === "")? (<h1>Loading weather...</h1>):
        <div id="widget-container">
        <h1>Weather</h1>
        <h3>{location}</h3>
        <div id="image-temp">
            <img id="widget-image" src={weatherIcon} alt="probably clouds"/>
            <div id="temperature">
                <p className="dash-text" id="max-temp">
                    {max}&#176;C
                </p>
                <p className="dash-text" id="min-temp">
                    {min}&#176;C
                </p>
            </div>
        </div>
        <div className="dash-text">{description}</div>
        

       </div>
        }
     </div>
    )   
};

export default Weather;