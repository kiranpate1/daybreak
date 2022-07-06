$(document).ready(function(){
  document.querySelector('.nav-logo').style.width = '55vw';
  document.querySelector('.nav-left .daybreak-info').style.opacity = '0';
  document.querySelector('.nav-left .cities-info').style.opacity = '0';
  setTimeout(function() {
    document.querySelector('.nav-left .daybreak-info').style.display = 'none';
    document.querySelector('.nav-left .cities-info').style.display = 'none';
	}, 200);
});

$(function() {
    var navBar = $(".nav-logo");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 100) {
            document.querySelector('.nav-logo').style.width = '131px';
        } else if (scroll < 100) {
            document.querySelector('.nav-logo').style.width = '55vw';
        }
    });
});

$('#home-link').click(function(e) {
  e.preventDefault();
  var linkUrl = $(this).attr('href');
  setTimeout(function(url) { window.location = url; }, 1000, linkUrl);
});

$( "#home-link" ).click(function() {
  document.querySelector('.nav-logo').style.width = '131px';
	document.querySelector('.nav-left .daybreak-info').style.display = 'block';
  document.querySelector('.nav-left .cities-info').style.display = 'block';
	document.querySelector('.nav-left .daybreak-info').style.opacity = '1';
  document.querySelector('.nav-left .cities-info').style.opacity = '1';
});

function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)

    );
}


const box = document.querySelector('#after-carousel');

document.addEventListener('scroll', function () {
	if (isInViewport(box) === true) {
		var elementDelay = 100;
			setTimeout(function () {
				for (let i = 0; i < document.querySelectorAll('.heading-massive span').length; i++) {
					document.querySelectorAll('.heading-massive span').forEach((element, i) => {
						setTimeout(function () {
							element.style.display = "inline-block" ?? "";
						}, i * elementDelay);
					});
				}
			}, 200);
	}
}, {
    passive: true
});


