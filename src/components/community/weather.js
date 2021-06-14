import React from 'react';

const Weather = ({weatherData}) => {
    const location = "Glasgow";
    const description = weatherData.weather[0].description;
    const max = Math.round(weatherData.main.temp_max) - 273;
    const min = Math.round(weatherData.main.temp_min) -273;

    return(
    <div id="weather-widget">
        {
        (weatherData.weather[0].main === "")? (<h1>Loading weather...</h1>):
        <>
        <h1>Weather</h1>
        <h3>{location}</h3>
        <p class="dash-text">Outlook: {description}</p>
        <p class="dash-text"><span>Max: {max}C</span> <span>Min: {min}C</span></p>
       </>
        }
     </div>
    )   
};

export default Weather;