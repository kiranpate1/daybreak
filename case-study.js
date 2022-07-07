    var elementDelay = 100;
		
    for (let i = 0; i < document.querySelectorAll('.case-top-bar-content > div').length; i++) {
      document.querySelectorAll('.case-top-bar-content > div').forEach((element, i) => {
        setTimeout(function () {
          element.style.opacity = "1" ?? "";
        }, i * elementDelay);
      });
    }
    setTimeout(function () {
      for (let i = 0; i < document.querySelectorAll('.heading-1 span').length; i++) {
        document.querySelectorAll('.heading-1 span').forEach((element, i) => {
          setTimeout(function () {
            element.style.display = "inline-block" ?? "";
          }, i * elementDelay);
        });
      }
    }, document.querySelectorAll('.case-top-bar-content > div').length * elementDelay);
    setTimeout(function () {
      for (let i = 0; i < document.querySelectorAll('.project-info-wrapper .project-info > div').length; i++) {
        document.querySelectorAll('.project-info-wrapper .project-info > div').forEach((element, i) => {
          setTimeout(function () {
            element.style.visibility = "visible" ?? "";
          }, i * elementDelay);
        });
      }
    }, document.querySelectorAll('.heading-1 span').length * elementDelay);
    setTimeout(function () {
      for (let i = 0; i < document.querySelectorAll('.project-image-intro > div').length; i++) {
        document.querySelectorAll('.project-image-intro > div').forEach((element, i) => {
          setTimeout(function () {
            element.style.visibility = "visible" ?? "";
          }, i * 250);
        });
      }
    }, (document.querySelectorAll('.heading-1 span').length + document.querySelectorAll('.project-info-wrapper .project-info > div').length) * elementDelay);
    setTimeout(function () {
      document.getElementsByClassName('main-container')[2].style.visibility = "visible";
    }, (document.querySelectorAll('.heading-1 span').length + document.querySelectorAll('.project-info-wrapper .project-info > div').length + document.querySelectorAll('.project-image-intro > div').length) * elementDelay);

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("fsdfsdfsdf");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

$(window).on('scroll', function() {
    scrollPosition = $(this).scrollTop();
    if (scrollPosition > 5) {
      document.querySelector("#case-top-bar-title").style.opacity = "0";
      document.querySelector("#project-expertise").classList.add("mobile-disappear");
    } else {
    	document.querySelector("#case-top-bar-title").style.opacity = "1";
    	document.querySelector("#project-expertise").classList.remove("mobile-disappear");
    }
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

const box = document.querySelector('.next-up-info');

document.addEventListener('scroll', function () {
	if (isInViewport(box) === true) {
		document.querySelector('.next-up-info').style.opacity = "1";
		document.querySelector('.next-up-overlay').style.opacity = "1";
		var elementDelay = 250;
		setTimeout(function () {
			for (let i = 0; i < document.querySelectorAll('.scroll-arrows svg path').length; i++) {
				document.querySelectorAll('.scroll-arrows svg path').forEach((element, i) => {
					setTimeout(function () {
						element.style.opacity = "1";
					}, i * elementDelay);
				});
			}
		}, 600);
	} else if (isInViewport(box) === false) {
		document.querySelector('.next-up-info').style.opacity = "0";
		document.querySelector('.next-up-overlay').style.opacity = "0";
		for (let i = 0; i < document.querySelectorAll('.scroll-arrows svg path').length; i++) {
			document.querySelectorAll('.scroll-arrows svg path')[i].style.opacity = "0.5";
		}
	}
}, {
    passive: true
});
