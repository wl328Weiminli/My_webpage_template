import React from "react";
import "./App.css";
import WeatherCard from "./components/WeatherCard/component";

function App() {
  return (
    <div className="App">
      <div className="weatherCard">
        <WeatherCard temp={30} condition="Clear" city="Sydney" country="AU" />
        <WeatherCard temp={5} condition="Rain" city="China" country="CHN" />
        <WeatherCard
          temp={-20}
          condition="Tornado"
          city="Melbourne"
          country="AU"
        />
      </div>
    </div>
  );
}

export default App;
