const api = {
    key: "47480f0cfef8eb75f54c9a896e3d8ca9",
    base: "https://community-open-weather-map.p.rapidapi.com/weather",
}

function getResults (query) {
    fetch(`${api.base}firstWeather?q=${query}&units=metric&APPID=${api.key}`)
    .then(firstWeather => {
        return firstWeather.json();
        }).then(displayResults01)
}

function displayResults01 (firstWeather) {
    let firstCity = document.querySelector("#prestonWeather #firstCity");
    firstCity.innerText = `${firstWeather.name}, ${firstWeather.sys.country}`;

    let now = new Date();
    let date= document.querySelector("#prestonWeather .townDate");
    date.innerText = dateBuilder(now);

}

function dateBuilder (d) {
    let months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",]
    let days = ["Sunday", "Monday", "Twesday", "Wednesday", "Thursday",
    "Friday", "Saturday"]

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()]
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
}

getResults01