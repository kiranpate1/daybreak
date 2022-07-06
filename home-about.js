async function torontotime() {
  const api_url = 'https://worldtimeapi.org/api/timezone/America/Toronto';
  const response = await fetch(api_url);
  const data = await response.json();
  const { datetime } = data;
	console.log(datetime.substring(11,19))
	for (let i = 0; i < document.querySelectorAll('.toronto-time').length; i++) {
		document.querySelectorAll(".toronto-time")[i].innerHTML = datetime.substring(11,19);
	}
}
async function SFtime() {
  const api_url = 'https://worldtimeapi.org/api/timezone/America/Los_Angeles';
  const response = await fetch(api_url);
  const data = await response.json();
  const { datetime } = data;
	console.log(datetime.substring(11,19))
	console.log(document.querySelectorAll('.sf-time').length)
	for (let i = 0; i < document.querySelectorAll('.sf-time').length; i++) {
		document.querySelectorAll(".sf-time")[i].innerHTML = datetime.substring(11,19);
	}
}

weatherUpdate = (city, slang) => {
  const xhr = new XMLHttpRequest();
  xhr.open(
    "GET", `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cad7ec124945dcfff04e457e76760d90`);
  	xhr.send();
  	xhr.onload = () => {
    var data = JSON.parse(xhr.response);
		for (let i = 0; i < document.querySelectorAll('.city-' + slang + ' .clouds').length; i++) {
			if (data.weather[0].main == 'Clouds') {
				document.querySelectorAll('.city-' + slang + ' .clouds')[i].style.display = 'block';
			} else if (data.weather[0].main == 'Clear') {
				document.querySelectorAll('.city-' + slang + ' .clear')[i].style.display = 'block';
			} else if (data.weather[0].main == 'Rain') {
				document.querySelectorAll('.city-' + slang + ' .rain')[i].style.display = 'block';
			} else if (data.weather[0].main == 'Snow') {
				document.querySelectorAll('.city-' + slang + ' .snow')[i].style.display = 'block';
			} else if (data.weather[0].main == 'Haze') {
				document.querySelectorAll('.city-' + slang + ' .haze')[i].style.display = 'block';
			} else if (data.weather[0].main == 'Thunderstorm') {
				document.querySelectorAll('.city-' + slang + ' .thunderstorm')[i].style.display = 'block';
			} else if (data.weather[0].main == 'Mist') {
				document.querySelectorAll('.city-' + slang + ' .mist')[i].style.display = 'block';
			}
		}
    console.log(data.name + ", " + `${Math.round(data.main.temp - 273.15)}°C` + ", " + data.weather[0].main + ", " + data.weather[0].description)
  };
};

weatherUpdate("toronto", "toronto");
weatherUpdate("san fransisco", "sf");


document.getElementById('menu-open').onclick = function openMobileNav() {
   document.getElementById('mobile-nav').style.maxHeight = '100vh'
	document.body.style.overflow="hidden";
}
document.getElementById('menu-close').onclick = function closeMobileNav() {
   document.getElementById('mobile-nav').style.maxHeight = '0vh'
	document.body.style.overflow="scroll";
}
