import React from "react";

function Weather(props) {
  function fahrenheitTemperature(celsiusTemperature) {
    let temperature = (celsisusTemperature * 9) / 5 + 32;
    return Math.round(temperature);
  }
  return (
    <div>
      The temperature in {props.city} is {props.temperature}°C and ..°F
    </div>
  );
}

export default Weather;
