class UI {
    constructor() {
        this.location = document.getElementById('w-location')
        this.desc = document.getElementById('w-desc')
        this.string = document.getElementById('w-string')
        this.details = document.getElementById('w-details')
        this.icon = document.getElementById('w-icon')
        this.humidity = document.getElementById('w-humidity')
        this.feelsLike = document.getElementById('w-feels-like')
        this.clouds = document.getElementById('w-clouds')
        this.wind = document.getElementById('w-wind')
    }

    display(weather) {
        this.location.textContent = weather.name
        this.desc.textContent = weather.weather[0].description
        this.string.textContent = `${weather.main.temp}°C`
        this.icon.setAttribute('src', `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`)
        this.humidity.textContent = `Humidity: ${weather.main.humidity}%`
        this.feelsLike.textContent = `Feels Like: ${weather.main.feels_like}°C`
        this.clouds.textContent = `Clouds: ${weather.clouds.all}%`
        this.wind.textContent = `Wind Speed: ${weather.wind.speed} KMH`
    }
}