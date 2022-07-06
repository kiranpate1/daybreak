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
      document.getElementsByClassName('.case-container')[2].style.visibility = "visible";
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
