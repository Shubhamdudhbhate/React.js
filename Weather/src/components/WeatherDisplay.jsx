import React from "react";

export default function WeatherDisplay({ weather }) {
  if (!weather) return null;

  const { location, current } = weather;

  return (
    <div className="mt-12 text-center text-white">
      <h1 className="text-4xl font-bold">
        {location.name}, {location.country}
      </h1>
      <p className="text-xl mt-2">{current.condition.text}</p>
      <p className="text-2xl mt-1">{current.temp_c}°C</p>
      <p className="mt-1">Humidity: {current.humidity}%</p>
      <p className="mt-1">Wind: {current.wind_kph} km/h</p>
      <img
        src={current.condition.icon}
        alt={current.condition.text}
        className="mx-auto mt-2"
      />
    </div>
  );
}
