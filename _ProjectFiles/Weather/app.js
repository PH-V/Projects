// Storage
const storage = new Storage()
// Get stored loc data
const weatherLocation = storage.getLocationData()
// Weather object
const weather = new Weather(weatherLocation)
// UI
const ui = new UI()

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather)

// Change Location
document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value
    // Change location
    weather.chanegeLocation(city)
    // Set location in ls
    storage.setLocationData(city)
    // Get and display weather
    getWeather()
    // Close modal
    $('#locModal').modal('hide')

})

function getWeather(){
    weather.getWeather()
        .then(results => {
            ui.display(results)
        })
        .catch(err => console.log(err))
}