import { useState } from 'react';

export default function SubHeader({ onSearch }) {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    if (city.trim() !== "") onSearch(city);
  };

  return (
    <div style={{ marginTop: '1rem' }}>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={{ flex:1, marginRight: '0.5rem'}}
      />
      <button onClick={handleSearch}>Get Weather</button>
    </div>
  );
}
