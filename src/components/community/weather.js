import React from 'react';

const Weather = ({weatherData}) => {
    const location = "Glasgow";

    return(
    <div id="weather-widget">
       <h1>Weather Data</h1>
        <h2>{location}</h2>
       <h2>{weatherData.weather[0].description}</h2>

       <h3><span>Max: {Math.round(weatherData.main.temp_max) - 273}C</span> <span>Min: {Math.round(weatherData.main.temp_min) -273}C</span></h3>
     </div>
    )
};

export default Weather;