

const search = async () => {
    const inputCity = document.getElementById('searchInput');
    const city = inputCity.value;
    inputCity.value = '';
    if (city == '') {
        alert("Plsease! Write a city name!");
    } else {
        const key = "84caadd13810a42c631866cf1d27cf72";
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
            .then(response => response.json())
            .then(data => displayWeather(data));
    }
}

const displayWeather = data => {
    // console.log(data);
    const city = document.getElementById('city-name');
    if (data.name == undefined) {

        alert("Input correct city name!");
    }
    else {
        city.innerText = `${data.name}`;
    }
    const temperature = document.getElementById('temperature');
    const Kelvin = `${(data.main.temp - 273.15).toFixed(2)}`
    temperature.innerText = `${Kelvin}`;
    const weather = document.getElementById('weather');
    weather.innerText = `${data.weather[0].description}`;



}