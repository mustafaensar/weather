import React, { useEffect } from 'react';
import './App.css';
import { usePosition } from 'use-position';
import axios from 'axios';

function App() {
  
  const [weather, setWeather] = React.useState();
  const [unit, setUnit] = React.useState("metric");
  const {latitude,longitude} = usePosition();
  console.log(latitude,longitude);
  
  useEffect(() => {
    latitude && longitude && getWeatherData(latitude, longitude)
  },[latitude,longitude]);
  
  async function getWeatherData (lat,lon) {
    const key = process.env.REACT_APP_WEATHER_DATA;
    
    const lang = navigator.language.split("-")[0];
    
    try{
      const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&lang=${lang}&units=metric`);
      console.log(data);
      setWeather(data);
    }
    catch{
      alert("Data is not found!");
    }
  }
  
  function handleUnit(){
    if(unit === "metric"){
      setUnit("imperial")
    }
    else{
      setUnit("metric")
    }
  }

  return (
    <>
      <div className="App">
        <h3>{weather.name}</h3>
        <h3>
          {unit === "metric" ? `${Math.ceil(weather.main.temp)} °C ` : `${Math.ceil(weather.main.temp * 1.8 + 32)} °F `}
          <button onClick={handleUnit}>Unit F°/C°</button>
        </h3>
        <h3>{weather.weather.map(data => data.description)}</h3>
      </div>
    </>
  );
}

export default App;
