const number = Math.floor(Math.random()*document.querySelectorAll('.landing-main').length);
$(document).ready(function(){
    $(this).scrollTop(5);
    //setTimeout(function(){ 
    //	document.getElementById('layout-' + number + '').style.pointerEvents = "all";
    //}, 2800);
    
    var layouts = document.querySelectorAll('.landing-main');
    layouts[number].style.display = 'block';
    
  	var shapeLoadTime = 0;
  
    var shapeLoader = 75;

    setTimeout(function () {
			loadTiles('.project')
			loadTiles('.project-mobile')
	    function loadTiles(screen) {
	      for (let i = 0; i < document.querySelectorAll('.layout-' + number + ' ' + screen).length; i++) {
					document.querySelectorAll('.layout-' + number + ' ' + screen).forEach((element, i) => {
						setTimeout(function () {
							element.style.display = "block" ?? "";
						}, i * shapeLoader);
					});
	      }
	    }

    }, shapeLoadTime);
});
window.onscroll = function (e) {  
	for (let i = 0; i < document.querySelectorAll('.layout-' + number + ' .project').length; i++) {
		document.querySelectorAll('.layout-' + number + ' .project')[i].style.display = "block";
  }
	for (let i = 0; i < document.querySelectorAll('.layout-' + number + ' .project-mobile').length; i++) {
		document.querySelectorAll('.layout-' + number + ' .project-mobile')[i].style.display = "block";
  }
} 

  const projects1 = ["inspired-1", "inspired-2", "inspired-3", "inspired-4", "party-round-1", "party-round-2", "party-round-3", "wombo-dream-1", "wombo-dream-2", "wombo-dream-3"];
  const projects2 = ["prologue-1", "prologue-2", "prologue-3", "prologue-4", "hyper-1", "hyper-2", "hyper-3", "party-grounds-1", "party-grounds-2", "spellbound-1", "spellbound-2"];
  const projects3 = ["startup-supreme-1", "startup-supreme-2", "startup-supreme-3", "vc-puzzle-1", "vc-puzzle-2", "workweek-1", "workweek-2", "workweek-3", "workweek-4"];

  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  var shuffle1 = shuffle(projects1);
  var shuffle2 = shuffle(projects2);
  var shuffle3 = shuffle(projects3);
  const combinedshuffle = shuffle1.concat(shuffle2, shuffle3);;
  console.log(combinedshuffle);


  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	document.querySelectorAll('.layout-' + number + ' .mobile .project-mobile')[0].classList.add('inspired', 'inspired-' + getRandomInt(1, 4))
	document.querySelectorAll('.layout-' + number + ' .mobile .project-mobile')[1].classList.add('party-round', 'party-round-' + getRandomInt(1, 3))
	document.querySelectorAll('.layout-' + number + ' .mobile .project-mobile')[2].classList.add('wombo-dream', 'wombo-dream-' + getRandomInt(1, 3))
	document.querySelectorAll('.layout-' + number + ' .mobile .project-mobile')[3].classList.add('prologue', 'prologue-' + getRandomInt(1, 4))
	document.querySelectorAll('.layout-' + number + ' .mobile .project-mobile')[4].classList.add('hyper', 'hyper-' + getRandomInt(1, 3))
	document.querySelectorAll('.layout-' + number + ' .mobile .project-mobile')[5].classList.add('party-grounds', 'party-grounds-' + getRandomInt(1, 2))
	document.querySelectorAll('.layout-' + number + ' .mobile .project-mobile')[6].classList.add('spellbound', 'spellbound-' + getRandomInt(1, 2))
	document.querySelectorAll('.layout-' + number + ' .mobile .project-mobile')[7].classList.add('startup-supreme', 'startup-supreme-' + getRandomInt(1, 3))
	document.querySelectorAll('.layout-' + number + ' .mobile .project-mobile')[8].classList.add('vc-puzzle', 'vc-puzzle-' + getRandomInt(1, 2))
	document.querySelectorAll('.layout-' + number + ' .mobile .project-mobile')[9].classList.add('workweek', 'workweek-' + getRandomInt(1, 4))

	for (let i = 0; i < document.querySelectorAll('.inspired').length; i++) {
		document.querySelectorAll('.inspired .caption')[i].innerHTML = "2022";
		document.querySelectorAll('.inspired .label')[i].innerHTML = "Inspired";
		document.querySelectorAll('.inspired .project-hover-top .body-founders-small')[i].innerHTML = "Unifying brands and consumers.";
		document.querySelectorAll('.inspired .project-hover-bottom .body-founders-small')[i].innerHTML = "Brand Identity<br>Strategy<br>Product";
	}

  for (let i = 0; i < document.querySelectorAll('.layout-' + number + ' .project').length; i++) {
    //const div = document.createElement("img");
    //div.setAttribute("src", combinedshuffle[i]);
    //document.querySelectorAll('.layout-' + number + ' .project')[i].appendChild(div);

    document.querySelectorAll('.layout-' + number + ' .desktop .project')[i].classList.add(combinedshuffle[i].slice(0, -2), combinedshuffle[i]);
	  
//     if (document.querySelectorAll('.layout-' + number + ' .desktop .project')[i].classList.contains('inspired')) {
//     	document.querySelectorAll('.layout-' + number + ' .caption')[i].innerHTML = "2022";
//     	document.querySelectorAll('.layout-' + number + ' .label')[i].innerHTML = "Inspired";
//       document.querySelectorAll('.layout-' + number + ' .project-hover-top .body-founders-small')[i].innerHTML = "Unifying brands and consumers.";
//       document.querySelectorAll('.layout-' + number + ' .project-hover-bottom .body-founders-small')[i].innerHTML = "Brand Identity<br>Strategy<br>Product";
//     } else 
		if (document.querySelectorAll('.layout-' + number + ' .desktop .project')[i].classList.contains("party-round")) {
    	document.querySelectorAll('.layout-' + number + ' .caption')[i].innerHTML = "2022";
    	document.querySelectorAll('.layout-' + number + ' .label')[i].innerHTML = "Party Round";
      document.querySelectorAll('.layout-' + number + ' .project-hover-top .body-founders-small')[i].innerHTML = "An automated fundraising tool.";
      document.querySelectorAll('.layout-' + number + ' .project-hover-bottom .body-founders-small')[i].innerHTML = "Brand Identity<br>Web Design";
    } else if (document.querySelectorAll('.layout-' + number + ' .desktop .project')[i].classList.contains("wombo-dream")) {
    	document.querySelectorAll('.layout-' + number + ' .caption')[i].innerHTML = "2022";
    	document.querySelectorAll('.layout-' + number + ' .label')[i].innerHTML = "Wombo Dream";
      document.querySelectorAll('.layout-' + number + ' .project-hover-top .body-founders-small')[i].innerHTML = "High-quality artwork created in seconds.";
      document.querySelectorAll('.layout-' + number + ' .project-hover-bottom .body-founders-small')[i].innerHTML = "Expertise<br>Expertise<br>Expertise";
    } else if (document.querySelectorAll('.layout-' + number + ' .desktop .project')[i].classList.contains("prologue")) {
    	document.querySelectorAll('.layout-' + number + ' .caption')[i].innerHTML = "2022";
    	document.querySelectorAll('.layout-' + number + ' .label')[i].innerHTML = "Prologue";
      document.querySelectorAll('.layout-' + number + ' .project-hover-top .body-founders-small')[i].innerHTML = "The tech holding company of the 2020s.";
      document.querySelectorAll('.layout-' + number + ' .project-hover-bottom .body-founders-small')[i].innerHTML = "Brand Identity<br>Naming<br>Strategy";
    } else if (document.querySelectorAll('.layout-' + number + ' .desktop .project')[i].classList.contains("hyper")) {
    	document.querySelectorAll('.layout-' + number + ' .caption')[i].innerHTML = "2022";
    	document.querySelectorAll('.layout-' + number + ' .label')[i].innerHTML = "Hyper";
      document.querySelectorAll('.layout-' + number + ' .project-hover-top .body-founders-small')[i].innerHTML = "Serving the next generation of founders.";
      document.querySelectorAll('.layout-' + number + ' .project-hover-bottom .body-founders-small')[i].innerHTML = "Web Design";
    } else if (document.querySelectorAll('.layout-' + number + ' .desktop .project')[i].classList.contains("party-grounds")) {
    	document.querySelectorAll('.layout-' + number + ' .caption')[i].innerHTML = "2022";
    	document.querySelectorAll('.layout-' + number + ' .label')[i].innerHTML = "Party Grounds";
      document.querySelectorAll('.layout-' + number + ' .project-hover-top .body-founders-small')[i].innerHTML = "Description for Party Grounds.";
      document.querySelectorAll('.layout-' + number + ' .project-hover-bottom .body-founders-small')[i].innerHTML = "Expertise<br>Expertise<br>Expertise";
    } else if (document.querySelectorAll('.layout-' + number + ' .desktop .project')[i].classList.contains("spellbound")) {
    	document.querySelectorAll('.layout-' + number + ' .caption')[i].innerHTML = "2022";
    	document.querySelectorAll('.layout-' + number + ' .label')[i].innerHTML = "Spellbound";
      document.querySelectorAll('.layout-' + number + ' .project-hover-top .body-founders-small')[i].innerHTML = "Interactive emails like magic.";
      document.querySelectorAll('.layout-' + number + ' .project-hover-bottom .body-founders-small')[i].innerHTML = "Web Design";
    } else if (document.querySelectorAll('.layout-' + number + ' .desktop .project')[i].classList.contains("startup-supreme")) {
    	document.querySelectorAll('.layout-' + number + ' .caption')[i].innerHTML = "2021";
    	document.querySelectorAll('.layout-' + number + ' .label')[i].innerHTML = "Startup Supreme";
      document.querySelectorAll('.layout-' + number + ' .project-hover-top .body-founders-small')[i].innerHTML = "Wearing digital nostaglia.";
      document.querySelectorAll('.layout-' + number + ' .project-hover-bottom .body-founders-small')[i].innerHTML = "Brand Identity<br>Web Design";
    } else if (document.querySelectorAll('.layout-' + number + ' .desktop .project')[i].classList.contains("vc-puzzle")) {
    	document.querySelectorAll('.layout-' + number + ' .caption')[i].innerHTML = "2022";
    	document.querySelectorAll('.layout-' + number + ' .label')[i].innerHTML = "VC Puzzle";
      document.querySelectorAll('.layout-' + number + ' .project-hover-top .body-founders-small')[i].innerHTML = "A Shrug x Party Round collaboration.";
      document.querySelectorAll('.layout-' + number + ' .project-hover-bottom .body-founders-small')[i].innerHTML = "Brand Identity<br>Web Design<br>Packaging Design";
    } else if (document.querySelectorAll('.layout-' + number + ' .desktop .project')[i].classList.contains("workweek")) {
    	document.querySelectorAll('.layout-' + number + ' .caption')[i].innerHTML = "2021";
    	document.querySelectorAll('.layout-' + number + ' .label')[i].innerHTML = "Workweek";
      document.querySelectorAll('.layout-' + number + ' .project-hover-top .body-founders-small')[i].innerHTML = "Putting creators first.";
      document.querySelectorAll('.layout-' + number + ' .project-hover-bottom .body-founders-small')[i].innerHTML = "Brand Identity<br>Web Design";
    }
  }

function duplicateChildNodes (parentId, screen){
  var parent = document.querySelector(parentId);
  NodeList.prototype.forEach = Array.prototype.forEach;
  var children = parent.childNodes;
  const node = document.createElement("div");
  children.forEach(function(item){
    var cln = item.cloneNode(true);
    node.appendChild(cln);
  });
  document.getElementById('layout-' + number + '').appendChild(node);
  node.classList.add("projects", screen);
  node.setAttribute("id", "duplicate-" + screen + "");
};

duplicateChildNodes('.layout-' + number + ' .projects.desktop', 'desktop');
duplicateChildNodes('.layout-' + number + ' .projects.mobile', 'mobile');


$('.project').on('mouseover',function(){for (let i = 0; i < document.querySelectorAll(".project").length; i++) {document.querySelectorAll(".project")[i].style.opacity = "0.2"}}).on('mouseout',function(){for (let i = 0; i < document.querySelectorAll(".project").length; i++) {document.querySelectorAll(".project")[i].style.opacity = "1"}})

$('.inspired').on('mouseover',function(){for (let i = 0; i < document.querySelectorAll('.inspired').length; i++) {document.querySelectorAll(".inspired")[i].style.opacity = "1"}})
$('.prologue').on('mouseover',function(){for (let i = 0; i < document.querySelectorAll('.prologue').length; i++) {document.querySelectorAll(".prologue")[i].style.opacity = "1"}})
$('.wombo-dream').on('mouseover',function(){for (let i = 0; i < document.querySelectorAll('.wombo-dream').length; i++) {document.querySelectorAll(".wombo-dream")[i].style.opacity = "1"}})
$('.spellbound').on('mouseover',function(){for (let i = 0; i < document.querySelectorAll('.spellbound').length; i++) {document.querySelectorAll(".spellbound")[i].style.opacity = "1"}})
$('.party-round').on('mouseover',function(){for (let i = 0; i < document.querySelectorAll('.party-round').length; i++) {document.querySelectorAll(".party-round")[i].style.opacity = "1"}})
$('.party-grounds').on('mouseover',function(){for (let i = 0; i < document.querySelectorAll('.party-grounds').length; i++) {document.querySelectorAll(".party-grounds")[i].style.opacity = "1"}})
//$('.galaxy').on('mouseover',function(){for (let i = 0; i < document.querySelectorAll('.galaxy').length; i++) {document.querySelectorAll(".galaxy")[i].style.opacity = "1"}})
$('.hyper').on('mouseover',function(){for (let i = 0; i < document.querySelectorAll('.hyper').length; i++) {document.querySelectorAll(".hyper")[i].style.opacity = "1"}})
$('.startup-supreme').on('mouseover',function(){for (let i = 0; i < document.querySelectorAll('.startup-supreme').length; i++) {document.querySelectorAll(".startup-supreme")[i].style.opacity = "1"}})
$('.vc-puzzle').on('mouseover',function(){for (let i = 0; i < document.querySelectorAll('.vc-puzzle').length; i++) {document.querySelectorAll(".vc-puzzle")[i].style.opacity = "1"}})
$('.workweek').on('mouseover',function(){for (let i = 0; i < document.querySelectorAll('.workweek').length; i++) {document.querySelectorAll(".workweek")[i].style.opacity = "1"}})


window.addEventListener("load", function(){
		infinite();
});
window.addEventListener("resize", function(){
		infinite();    
});
window.addEventListener("scroll", function(){
		infinite();    
});

function infinite() {
  if ($(window).width() > 992) {
		infiniteScreen('desktop')
  } else {
		infiniteScreen('mobile')
  };
	function infiniteScreen(screen) {
		if((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
		 var wHeight = $(window).height();
		 var eOffset = $('.layout-' + number + ' .projects.' + screen).offset().top;
		 var eHeight = $('.layout-' + number + ' .projects.' + screen).height();
		 $(window).scrollTop(eOffset - wHeight + eHeight); 
		 console.log("bottom");
		}

		if(window.scrollY==0) {
		 var eOffset = $('#duplicate-' + screen).offset().top; 
		 $(window).scrollTop(eOffset - 126);
		 console.log("top");
		}
	}
}

//  $(window).scroll(function() {   
//    if((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
//      var wHeight = $(window).height();
//      var eOffset = $('.layout-' + number + ' .projects').offset().top;
//      var eHeight = $('.layout-' + number + ' .projects').height();
//      $(window).scrollTop(eOffset - wHeight + eHeight); 
//      console.log("bottom");
//    }
   
// 	 if(window.scrollY==0) {
//      var eOffset = $('#duplicate').offset().top; 
//      $(window).scrollTop(eOffset - 126);
//      console.log("top");
//    }
// });

var intervalId = window.setInterval(function(){
	torontotime()
  SFtime()
}, 1000);



async function torontotime() {
  const api_url = 'https://worldtimeapi.org/api/timezone/America/Toronto';
  const response = await fetch(api_url);
  const data = await response.json();
  const { datetime } = data;
	document.getElementById("toronto-time").innerHTML = datetime.substring(11,19);
}
async function SFtime() {
  const api_url = 'https://worldtimeapi.org/api/timezone/America/Los_Angeles';
  const response = await fetch(api_url);
  const data = await response.json();
  const { datetime } = data;
	document.getElementById("sf-time").innerHTML = datetime.substring(11,19);
}

weatherUpdate = (city, slang) => {
  const xhr = new XMLHttpRequest();
  xhr.open(
    "GET", `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cad7ec124945dcfff04e457e76760d90`);
  	xhr.send();
  	xhr.onload = () => {
    var data = JSON.parse(xhr.response);
    if (data.weather[0].main == 'Clouds') {
    	document.querySelector('.city-' + slang + ' .clouds').style.display = 'block';
    } else if (data.weather[0].main == 'Clear') {
    	document.querySelector('.city-' + slang + ' .clear').style.display = 'block';
    } else if (data.weather[0].main == 'Rain') {
    	document.querySelector('.city-' + slang + ' .rain').style.display = 'block';
    } else if (data.weather[0].main == 'Snow') {
    	document.querySelector('.city-' + slang + ' .snow').style.display = 'block';
    } else if (data.weather[0].main == 'Haze') {
    	document.querySelector('.city-' + slang + ' .haze').style.display = 'block';
    } else if (data.weather[0].main == 'Thunderstorm') {
    	document.querySelector('.city-' + slang + ' .thunderstorm').style.display = 'block';
    }
    console.log(data.name + ", " + `${Math.round(data.main.temp - 273.15)}°C` + ", " + data.weather[0].main + ", " + data.weather[0].description)
  };
};

weatherUpdate("toronto", "toronto");
weatherUpdate("san fransisco", "sf");
