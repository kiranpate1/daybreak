$(document).ready(function(){
  document.querySelector('.nav-logo').style.width = '55vw';
  document.querySelector('.nav-left .daybreak-info').style.opacity = '0';
  document.querySelector('.nav-left .cities-info').style.opacity = '0';
  setTimeout(function() {
    document.querySelector('.nav-left .daybreak-info').style.display = 'none';
    document.querySelector('.nav-left .cities-info').style.display = 'none';
	}, 200);
});
