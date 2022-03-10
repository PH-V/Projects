class Weather {
    constructor(city) {
        this.apiKey = '1f17231956d8e2095ae0fccfb1443b12'
        this.city = city
    }

    async getWeather() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}&units=metric`)
        
        const responseData = await response.json();

        return responseData
    }

    chanegeLocation(city) {
        this.city = city
    }
}