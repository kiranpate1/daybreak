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

$(document).ready(function(){
    $(window).scroll(function(){
        if ($('#after-carousel').isOnScreen()) {
            // The element is visible, do something
            console.log("in viewport!");
        } else {
            // The element is NOT visible, do something else
        }
    });
});

$.fn.isOnScreen = function(){
    
    var win = $(window);
    
    var viewport = {
        top : win.scrollTop(),
        left : win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();
    
    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();
    
    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
    
};

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
