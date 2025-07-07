export default function WeatherCard({ weather }) {
  const { city, temp, description, icon, humidity, wind } = weather;

  return (
<div style={{
  backgroundColor: "rgba(99, 93, 93, 0.32)",
  border: "2px solid #ccc",
  borderRadius: "10px",
  padding: "2rem",
  marginTop: "1rem",
  textAlign: "center",
  boxShadow: "0 2px 15px rgb(255, 255, 255)"
  
}}>
      <h3>{city}</h3>
      <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt={description} />
      <p><strong>{description}</strong></p>
      <p>🌡️ {temp}°C</p>
      <p>💧 Humidity: {humidity}%</p>
      <p>💨 Wind: {wind} m/s</p>
    </div>
  );
}
