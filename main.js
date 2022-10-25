let weather = {
    apiKey: '38564544b89526eab83248c62b5d01bc',
    fetchWeather: function(city) {
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=38564544b89526eab83248c62b5d01bc')
    .then((response) => response.json())
    .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const {name} = data;
        const {icon, description} = data.weather[0];
        const {temp, humidity, pressure} = data.main;
        const {speed} = data.wind;
        document.querySelector('.location').textContent = name;
        document.querySelector('.weather-icon').src = 'https://openweathermap.org/img/wn/'+icon+'@2x.png';
        let days = ["Sunday", 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        let now = new Date();
        document.querySelector('.date-dayname').textContent = days[now.getDay()];
        document.querySelector('.date-day').textContent = `${now.getDate()}.0${now.getMonth()}.${now.getFullYear()}`;
        document.querySelector('.weather-temp').innerHTML = Math.floor(temp - 273) + '&deg;C';
        document.querySelector('.weather-desc').textContent = description;
        document.querySelector('.value1').textContent = pressure;
        document.querySelector('.value2').textContent = humidity + '%';
        document.querySelector('.value3').textContent = speed + ' km/h';
        document.querySelector('.weather-side').classList.remove('visible');
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900?"+name+"')";
    },
    search: function() {
        this.fetchWeather(document.querySelector('.location-input').value);
    }
};   
document.querySelector('.location-input').addEventListener('keyup', function(event) {
    if (event.key == 'Enter') {
        weather.search();
    }
})
weather.fetchWeather('Moscow');
        
        
        // document.querySelector('.day-name1').textContent = days[now.getDay() + 1];
        // document.querySelector('.day-name2').textContent = days[now.getDay() + 2];
        // document.querySelector('.day-name3').textContent = days[now.getDay() + 3];
        // document.querySelector('.day-name4').textContent = days[now.getDay() + 4];
