const apiKey = "042dd97cfd7cf74f9712148ed0b84fcf";
const fetchWeather =  async (city) => {
const response = await fetch ("https://api.openweathermap.org/data/2.5/weather?q="
   +city
   +"&units=metric&appid=042dd97cfd7cf74f9712148ed0b84fcf")
   .then((response) => {
      if (!response.ok) {
      alert("No weather found.");
      throw new Error("No weather found.");
      }
   return response;
   });
   const data = await response.json()
   return data;
}