const apiKey = '3bf91336df5a4361a706701ebd60800f';
document.getElementById('getWeatherBtn').addEventListener('click', function() {
  const city = document.getElementById('cityInput').value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.cod === 200) {
        displayWeather(data);
      } else {
        alert('City not found');
      }
    })
    .catch(error => console.error('Error fetching data:', error));
});

function displayWeather(data) {
  const weatherDisplay = document.getElementById('weatherDisplay');
  const { main, name, weather } = data;
  const temp = main.temp;
  const description = weather[0].description;
  const icon = `http://openweathermap.org/img/wn/${weather[0].icon}.png`;

  weatherDisplay.innerHTML = `
    <h2>Weather in ${name}</h2>
    <img src="${icon}" alt="${description}" />
    <p>${description}</p>
    <p>Temperature: ${temp} °C</p>
  `;
}