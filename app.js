const search = document.querySelector('form');
const weatherDetails = document.querySelector('.weather')
const updateCity = async (city) => {
    const weather = await fetchWeather(city);
    return weather;
}

const updateUi = (data) => {
    const weather = data;
    // get the city weather details 
    const {name} = data;
    const {icon, description} = data.weather[0];
    const {temp, humidity} = data.main;
    const {speed} = data.wind;
    // update weather details template
    weatherDetails.innerHTML = 
    `
    <div>
    <h2>${name}</h2>
    <div class="temp">${temp}°C</div>
    <article class="weather-description">
      <p class="description">
      <img src="https://openweathermap.org/img/wn/${icon}.png" alt="weather icon" class="icon" />
      ${description}y</p>
      <p class="humidity">Humidity: ${humidity}%</p>
      <p class="wind">Wind speed: ${speed} km/h</p>
    </article></div>    
    `
    weatherDetails.classList.remove('hidden');
    document.body.style.backgroundImage =
      "url('https://source.unsplash.com/1600x900/?" + name + "')";
};

search.addEventListener('submit', e => {
    //prevent from default action
    e.preventDefault();
    const city = search.city.value.trim();
    search.reset();
    //update the UI with new city
    updateCity(city)
    .then(data => updateUi(data))
    .catch(err => console.log(err));
});