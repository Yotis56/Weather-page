const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']


function renderWeatherTab (data) {
  const date = new Date (data.dt * 1000)
  const tag = 
  `<div class="tag">
    <div className="tag__info">
      <h3 class="city-name">${data.name}</h3>
      <p class="day">${days[date.getDay()]}, ${date.getHours()}:${date.getMinutes()}</p>
      <p class="description">${data.weather[0].description}</p>
    </div>
    <div class="tag__weather">
      <img class="weather-icon" alt="weather icon" src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" />
      <p class="weather-temperature">${data.main.temp}</p>
      <small class="weather-units">°C</small>
    </div>
    <div class="tag__additional-info">
      <p className="weather-humidity">Humedad: ${data.main.humidity}%</p>
      <p className="weather-wind">viento a ${data.wind.speed * 3.6 } km/h</p>
    </div>
  </div>`
  
  return tag 
}

export default renderWeatherTab