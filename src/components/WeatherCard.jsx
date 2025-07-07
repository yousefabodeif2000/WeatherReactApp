export default function WeatherCard({ weather }) {
  if (!weather) return null;

  const {
    name,
    sys: { country },
    weather: weatherDetails,
    main: { temp, humidity },
    wind: { speed },
  } = weather;

  const description = weatherDetails[0].description;
  const icon = weatherDetails[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

  return (
    <div
      style={{
        marginTop: "1rem",
        padding: "1.5rem",
        borderRadius: "12px",
        background: "rgba(255, 255, 255, 0.2)",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        maxWidth: "400px",
        marginLeft: "auto",
        marginRight: "auto",
        textAlign: "center",
      }}>

      <h2 style={{ marginBottom: "0.5rem" }}>
        {name}, {country}
      </h2>
      <img src={iconUrl} alt={description} />
      <p style={{ textTransform: "capitalize" }}>{description}</p>
      <p>🌡 Temp: {temp}°C</p>
      <p>💧 Humidity: {humidity}%</p>
      <p>💨 Wind Speed: {speed} m/s</p>
    </div>
  );
}
