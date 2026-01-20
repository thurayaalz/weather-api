 async function getWeather(location= 'dammam', units='metric'){
  
  const apiKey = '42795Q32AVAG29UDT3NERGE4A';
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(location)}?key=${apiKey}&unitGroup=${units}`;
  const response = await fetch(url);
  const data = await response.json();

  return data;
}

 const handleErr = fn => (...params) => fn(...params).catch(console.error);
export const safeWeather = handleErr(getWeather);

