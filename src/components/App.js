
import React, { useState } from 'react';
import './../styles/App.css';


const WeatherDisplay = ({ weather }) => {
  const temperatureColor = weather.temperature > 20 ? 'red' : 'blue';
  
  return (
    <div>
      <p>
        Temperature: <span style={{ color: temperatureColor }}>{weather.temperature}</span>
      </p>
      <p>Conditions: {weather.conditions}</p>
    </div>
  );
};

const App = () => {
  const [weather] = useState({
    temperature: 25,
    conditions: "Sunny"
  });
  return (
    <div>
        {/* Do not remove the main div */}
    <div style={{ 
      padding: '20px', 
      fontFamily: 'Arial, sans-serif',
      maxWidth: '400px',
      margin: '50px auto',
      textAlign: 'center',
      backgroundColor: '#f5f5f5',
      borderRadius: '10px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
    }}>
      <h1 style={{ color: '#333', marginBottom: '30px' }}>Weather Display</h1>
      <WeatherDisplay weather={weather} />
      
      <div style={{ 
        marginTop: '30px', 
        padding: '15px', 
        backgroundColor: 'white', 
        borderRadius: '5px',
        fontSize: '14px',
        color: '#666'
      }}>
        <p><strong>Styling Logic:</strong></p>
        <p>Temperature above 20°C: <span style={{color: 'red'}}>Red</span></p>
        <p>Temperature 20°C or below: <span style={{color: 'blue'}}>Blue</span></p>
      </div>
    </div>
    </div>
  )
}

export default App
