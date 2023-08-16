const app = document.querySelector('.weather-app')
const temp = document.querySelector('.temp')
const dateOutput = document.querySelector('.date')
const timeOutput = document.querySelector('.time')
const conditionOutput = document.querySelector('.condition')
const nameOutput = document.querySelector('.name')
const icon = document.querySelector('.icon')
const cloudOutput = document.querySelector('.cloud')
const humidityOutput = document.querySelector('.humidity')
const windOutput = document.querySelector('.wind')
const form = document.getElementById('locationInput')
const search = document.querySelector('.search')
const btn = document.querySelector('.submit')
const cities = document.querySelectorAll('.city')

//Default city when page loads
let cityInput = 'Ahmedabad'

//Add click event to each city in the panel
cities.forEach((city) => {
    city.addEventListener('click', (e) => {
        //Change from default city to the clicked one
        cityInput = e.target.innerHTMl;
        //Call the function to get the weather data
        fetchWeatherData();
        app.style.opacity = "0";
    });
})

form.addEventListener('submit', (e) => {
    if(search.value.length == 0) {
        alert('Please enter a city name');
    } else {
        cityInput = search.value;
        fetchWeatherData();
        console.log(cityInput);
        search.value = "";
        app.style.opacity = "0";
    }

    e.preventDefault();
});

function dayOfTheWeek(day, month, year) {
    const Weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    return Weekdays[new Date(`${day}/${month}/${year}`).getDay()];
};

function fetchWeatherData() {
    fetch(`https://api.weatherapi.com/v1/current.json?key=e26ee2f87b994c98863100552231608&q=${cityInput}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);

            temp.innerHTML = data.current.temp_c + "&#176;";
            conditionOutput.innerHTML = data.current.condition.text;

            //Get the date and time
            const date = data.location.localtime;
            const y = parseInt(date.substr(0, 4));
            const m = parseInt(date.substr(5, 2));
            const d = parseInt(date.substr(8, 2));
            const time = date.substr(11);
            
            //Display the date and time format: 12:00 PM, Monday, 31 December 2020
            dateOutput.innerHTML = `${dayOfTheWeek(d, m, y)}, ${d} ${m} ${y}`;
            timeOutput.innerHTML = time;
            nameOutput.innerHTML = data.location.name;

            const iconId = data.current.condition.icon.substr(
                "//cdn.weatherapi.com/weather/64x64/".length);
            
            icon.src = "./icons/" + iconId;

            cloudOutput.innerHTML = data.current.cloud + "%";
            humidityOutput.innerHTML = data.current.humidity + "%";
            windOutput.innerHTML = data.current.wind_kph + "km/h";

            let timeOfDay = "day";

            const code = data.current.condition.code;   //1000

            if(!data.cuurent.is_day) {
                timeOfDay = "night";
            }

            if(code == 1000) {  //Clear
                app.style.backgroundImage = `url(./images/${timeOfDay}/clear.jpg)`;
                btn.style.background = "#e5ba92";
                if(timeOfDay == "night") {
                    btn.style.background = "#181e27";
                }
            } else if (
                code == 1003 ||
                code == 1006 ||
                code == 1009 ||
                code == 1030 ||
                code == 1169 ||
                code == 1187 ||
                code == 1135 ||
                code == 1273 ||
                code == 1276 ||
                code == 1279 ||
                code == 1282
            ) {
                app.style.background = `url(./images/${timeOfDay}/cloudy.jpg)`;
                btn.style.background = "#faf6d1b";
                if(timeOfDay == "night") {
                    btn.style.background = "#181e27";
                }
            }


        });
}