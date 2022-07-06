$(document).ready(function(){
  document.querySelector('.nav-logo').style.width = '55vw';
  document.querySelector('.nav-left .daybreak-info').style.opacity = '0';
  document.querySelector('.nav-left .cities-info').style.opacity = '0';
  setTimeout(function() {
    document.querySelector('.nav-left .daybreak-info').style.display = 'none';
    document.querySelector('.nav-left .cities-info').style.display = 'none';
	}, 200);
});

var elementDelay = 100;
setTimeout(function () {
	for (let i = 0; i < document.querySelectorAll('.heading-massive span').length; i++) {
		document.querySelectorAll('.heading-massive span').forEach((element, i) => {
			setTimeout(function () {
				element.style.display = "inline-block" ?? "";
			}, i * elementDelay);
		});
	}
}, 1000);
