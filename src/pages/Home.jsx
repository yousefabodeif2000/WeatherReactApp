import { useState } from "react";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import WeatherCard from "../components/WeatherCard";
import { getWeather } from "../api/getWeather";

export default function Home() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async (city) => {
    try {
      setError(null);
      const data = await getWeather(city);
      setWeatherData(data);
    } catch (err) {
      setWeatherData(null);
      setError(err.message);
      console.error("ERROR ", error);
    }

  };

  return (
    <main>
      <Header text="🌦️ Weather App" />
      <h2>Welcome to the Weather App</h2>
      <p>Use the search bar to find weather information for your city.</p>
      <SubHeader onSearch={handleSearch} />
      {error && <p style={{ color: "red" }}>{error}</p>}
      {weatherData && <WeatherCard weather={weatherData} />}
    </main>
  );
}
