//Elements of Html
const cityElem = document.querySelector(".city");
const countryElem = document.querySelector(".country")
const descriptionElem = document.querySelector(".description");
const cloudsElem = document.querySelector(".clouds")
const tempElem = document.querySelector(".temp");
const pressureElem = document.querySelector(".pressure");
const humidityElem = document.querySelector(".humidity");
const temp_maxElem = document.querySelector(".temp_max");
const temp_minElem = document.querySelector(".temp_min");
const feels_likeElem = document.querySelector(".feels_like");

//Parameters for fetch
const options = {
    method: "GET",
    mode: "cors",
    cache: "default",
};

//Api OpenWeatherMap (City)
const url = 'https://api.openweathermap.org/data/2.5/weather?q=S%C3%A3o%20Paulo&appid=64bcfe8d7d1a5dc415f6f44af3746143&units=metric&lang=pt';

fetch(url)
    .then(response => response.json())
    .then(result => {
        const dados = JSON.stringify(result);

        countryElem.innerHTML = `<strong>${result.sys.country}</strong>`;
        cityElem.innerHTML = `<strong>${result.name}</strong>` + ` -`
        descriptionElem.innerHTML = `<strong>${result.weather[0].description}`;
        cloudsElem.innerHTML = `<span>total de nuvens: </span><br>` + result.clouds.all;
        tempElem.innerHTML = `<span>Temperatura: </span><br>` + result.main.temp
        pressureElem.innerHTML = `<span>Pressão: </span><br>` + result.main.pressure;
        humidityElem.innerHTML = `<span>Umidade: </span><br>` + result.main.humidity;
        temp_maxElem.innerHTML = `<span>Temperatura Máxima: </span>` + result.main.temp_max;
        temp_minElem.innerHTML = `<span>Temperatura Mínima: </span>` + result.main.temp_min;
        feels_likeElem.innerHTML = `<span>Sensação Térmica: </span>` + result.main.feels_like;
    })
    .catch(function (err) {
        console.error(err);
    })