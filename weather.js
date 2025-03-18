let apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
let apiKey="994fca106898bb4094a54bd4ea59789d";

let searchBox=document.querySelector(".search input");
let searchButton=document.querySelector(".search button");
let weatherIcon=document.querySelector(".weather-icon");

async function weatherApp(city) {
    let response=await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data=await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
    document.querySelector(".wind").innerHTML=data.wind.speed+" km/h";

    let weatherMain=data.weather[0].main;
    console.log(weatherMain);
    let newSrc=`images/${weatherMain}.png`;
    weatherIcon.src=newSrc;
 }
 searchButton.addEventListener("click",()=>{
    weatherApp(searchBox.value);
 })