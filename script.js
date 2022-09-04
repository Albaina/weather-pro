function currentDay(date) {
    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    let currenDay = days[date.getDay()];
    let hours = date.getHours();
    if (hours < 10) {
        hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }

    return `${currenDay} ${hours}:${minutes}`;
}

let dateEl = document.querySelector("#date");
let now = new Date();
dateEl.innerHTML = currentDay(now);

function showTemperature(responde) {
    let temp = Math.round(responde.data.main.temp);
    let tempEl = document.querySelector("#temperature");
    tempEl.innerHTML = `${temp}`;
    let tdesc = document.querySelector("#description");
    tdesc.innerHTML = responde.data.weather[0].description;
    let humidity = document.querySelector("#humidity");
    humidity.innerHTML = `Humidity: ${responde.data.main.humidity}%`;
    let wind = document.querySelector("#wind");
    wind.innerHTML = `Wind: ${responde.data.wind.speed} km/h`;
    let icon = response.data.weather[0].icon;
    let iconEl = document.querySelector("#icon");
    iconEl.setAttribute(
        "img",
        "http://openweathermap.org/img/wn/" + icon + "@2x.png"
    );
    iconEl.setAttribute("alt", response.data.weather[0].description);
}

function searchMe(event) {
    event.preventDefault();
    let searchedC = document.querySelector("#valueC");
    let h1 = document.querySelector("#city");
    h1.innerHTML = searchedC.value;
    let apiKey = "bc708c4e8fdf30d1ef2f70cfde5274b1";
    let city = document.querySelector("#valueC").value;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`;
    axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
}
let form = document.querySelector("#search-city");
form.addEventListener("submit", searchMe);
//

function showPosition(position) {
    alert(`Your location is ${position.coords.latitude}`);
}

function getCurrentPosition() {
    navigator.geolocation.getCurrentPosition(showPosition);
}

let button = document.querySelector("#currentB");
button.addEventListener("click", getCurrentPosition);