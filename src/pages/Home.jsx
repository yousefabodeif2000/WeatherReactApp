import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import WeatherCard from "../components/WeatherCard";

export default function Home() {

      const mockWeather = {
    name: "Alexandria",
    sys: { country: "EG" },
    weather: [{ description: "clear sky", icon: "01d" }],
    main: { temp: 28.5, humidity: 40 },
    wind: { speed: 3.2 },
  };

  return (
    <main>
      <Header text="🌦️ Weather App" />
      <h2>Welcome to the Weather App</h2>
      <p>Use the search bar to find weather information for your city.</p>
      <SubHeader onSearch={(city) => console.log(`Searching weather for ${city}`)} />
        <p>Example Weather Data:</p>
      <WeatherCard weather={mockWeather} />
    </main>
  );
}
