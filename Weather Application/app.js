
const ui = new UI();
const storage = new Storage();

const weatherLocation = storage.getLocationData();

const weather = new Weather(weatherLocation.city, weatherLocation.state);
weather.changeLocation(city,state);
storage.setLocationData(city,state);


document.addEventListener('DOMContentLoaded', getWeather);

// Change location event - close modal jQuery based on Boostrap dependance

document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;

  weather.changeLocation(city, state);

  getWeather();

$('#locModal').modal('hide');
})


function getWeather(){
weather.getWeather()
.then(results => {
  ui.paint(results)
})
.catch(err => console.log(err));
}