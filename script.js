//display date
let d = new Date();
let days = ["Sunday", "Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday"];
let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let day = days[d.getDay()];
let date = d.getDate();
let month = months[d.getMonth()];
let year = d.getFullYear();
document.getElementById("day").innerHTML=day;
document.getElementById("date").innerHTML= `${date} ${month} ${year}`;

//weather
async function getweather(){
    const city = document.getElementById("location").value;
    const weatherIcon = document.querySelector(".weather-icon");
    const apikey = 'a9a6ee00be6e860290c0aa40d609b713';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
    try{
        const response = await fetch(url);
        var data = await response.json();
        console.log(data);
        document.getElementById("loc_name").innerHTML="Weather in "+ data.name + "," +data.sys?.country;
        document.getElementById("temp").innerHTML= "Temperature : " + data.main.temp+ " °C";
        document.getElementById("description").innerHTML= "Description : " +data.weather[0].description;
        document.getElementById("humidity").innerHTML= "Humidity : " +data.main.humidity+ " %";
        document.getElementById("wind").innerHTML="Wind Speed : " +data.wind.speed + " km/h";
    }
    catch(error){
        console.log("Error fetching data",error);
    }

    //weather icon
    if(data.weather[0].main == "Clouds"){
        weatherIcon.src="./img/clouds.png";
    }else if(data.weather[0].main =="Clear"){
        weatherIcon.src="./img/clear.png";
    }else if(data.weather[0].main == "Rain"){
        weatherIcon.src="./img/rain.png";
    }else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src="./img/drizzle.png";
    }else if(data.weather[0].main == "Mist"){
        weatherIcon.src="./img/mist.png";
    }else if(data.weather[0].main == "Snow"){
        weatherIcon.src="./img/snow.png";
    }
    document.querySelector(".weather-details").style.display="block";
}
getweather();
    
    
    
