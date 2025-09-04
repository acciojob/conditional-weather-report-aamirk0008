import React from "react";

const WeatherDisplay = ({ weatherData }) => {
  return (
    <div>
      <p>
        Temperature:{" "}
        <span style={{ color: weatherData.temperature > 20 ? "red" : "blue" }}>
          {weatherData.temperature}
        </span>
      </p>
      <p>Conditions: {weatherData.conditions}</p>
    </div>
  );
};

export default WeatherDisplay;
