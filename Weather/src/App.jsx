import { useState } from "react";
import { motion } from "framer-motion";
import "./App.css";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const getWeather = async () => {
    if (!city) return;
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city.trim()}&appid=${API_KEY}&units=metric`
      );
      const data = await res.json();
      if (data.cod === 200) {
        setWeather(data);
        setError("");
      } else {
        setWeather(null);
        setError(data.message);
      }
    } catch (err) {
      setWeather(null);
      setError("Failed to fetch weather");
      console.error(err);
    }
  };

  const getBgColor = () => {
    if (!weather) return "from-blue-400 to-purple-500";
    const main = weather.weather[0].main.toLowerCase();
    if (main.includes("cloud")) return "from-gray-400 to-gray-600";
    if (main.includes("rain")) return "from-blue-600 to-gray-700";
    if (main.includes("snow")) return "from-white to-blue-300";
    if (main.includes("clear")) return "from-yellow-400 to-orange-400";
    if (main.includes("storm")) return "from-purple-700 to-black";
    if (main.includes("mist") || main.includes("fog")) return "from-gray-500 to-gray-700";
    return "from-blue-400 to-purple-500";
  };

  return (
    <div className={`app-container bg-gradient-to-br ${getBgColor()}`}>
      <h1 className="app-heading">🌤 Colorful Weather App 🌈</h1>

      <div className="input-container">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city"
          className="city-input"
        />
        <button onClick={getWeather} className="search-button">
          Search
        </button>
      </div>

      {error && (
        <motion.p
          className="error-message"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {error}
        </motion.p>
      )}

      {weather && (
        <motion.div
          className="weather-card"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
        >
          <h2 className="weather-name">{weather.name}</h2>
          <img
            src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt="weather icon"
          />
          <p className="temperature">{weather.main.temp}°C</p>
          <p className="weather-desc">{weather.weather[0].description}</p>
          <p className="weather-extra">
            Humidity: {weather.main.humidity}% | Wind: {weather.wind.speed} m/s
          </p>
        </motion.div>
      )}
    </div>
  );
}

export default App;
