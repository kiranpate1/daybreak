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

// Get the an HTML element
var element = document.querySelector('#afsdffsd');

// Get its bounding client rectangle
var bounding = element.getBoundingClientRect();

function isInViewPort(element) {
    // Get the bounding client rectangle position in the viewport
    var bounding = element.getBoundingClientRect();

    // Checking part. Here the code checks if it's *fully* visible
    // Edit this part if you just want a partial visibility
    if (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    ) {
        console.log('In the viewport! :)');
        return true;
    } else {
        console.log('Not in the viewport. :(');
        return false;
    }
}

window.addEventListener('scroll', function (event) {
    if (isInViewport(theElementToWatch)) {
      // update the element display
    }
}, false);

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
