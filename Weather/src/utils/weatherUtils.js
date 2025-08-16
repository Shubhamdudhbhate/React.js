export const getBackground = (weather) => {
  if (!weather) return "bg-gray-200";

  const condition = weather.current.condition.text.toLowerCase();

  if (condition.includes("cloud")) return "bg-gray-500";
  if (condition.includes("rain") || condition.includes("drizzle")) return "bg-blue-600";
  if (condition.includes("snow")) return "bg-white text-gray-800";
  if (condition.includes("sun") || condition.includes("clear")) return "bg-yellow-400";

  return "bg-gray-200";
};
