import React from 'react'

export default function Weather(props) {
  return (
    <>
      <h3>{props.weather.name}</h3>
        <h3>
          {props.unit === "metric" ? `${Math.ceil(props.weather.main.temp)} °C ` : `${Math.ceil(props.weather.main.temp * 1.8 + 32)} °F `}
          <button onClick={props.handleUnit}>Unit F°/C°</button>
        </h3>
        <h3>{props.weather.weather.map(data => data.description)}</h3>
    </>
  )
}
