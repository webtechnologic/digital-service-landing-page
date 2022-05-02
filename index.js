//Burger menu
const burger = document.querySelector('.menu-burger');
const navMenu = document.querySelector('.menu-list-nav');
const html = document.querySelector('html');

function toggleMenu() {
    burger.classList.toggle('open');
    navMenu.classList.toggle('close');
    html.classList.toggle('scroll-close');
}

burger.addEventListener('click', toggleMenu);
navMenu.addEventListener('click', toggleMenu);

//Fixed header
$(function() {
    let header = $('.header');
     
    $(window).scroll(function() {
      if($(this).scrollTop() > 1) {
       header.addClass('header--fixed');
      } else {
       header.removeClass('header--fixed');
      }
    });
  });

  
//Counter  
var time = 2,
  cc = 1;
$(window).scroll(function() {
  $('#counter').each(function() {
    var
      cPos = $(this).offset().top,
      topWindow = $(window).scrollTop();
    if (cPos < topWindow + 200) {
      if (cc < 2) {
        $(".number").addClass("show");
        $('div').each(function() {
          var
            i = 1,
            num = $(this).data('num'),
            step = 1000 * time / num,
            that = $(this),
            int = setInterval(function() {
              if (i <= num) {
                that.html(i);
              } else {
                cc = cc + 2;
                clearInterval(int);
              }
              i++;
            }, step);
        });
      }
    }
  });
});


//Modal window
const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll(".lock-padding");

let unlock = true;

const timeout = 800;

if(popupLinks.length > 0) {
    for(let index = 0; index < popupLinks.length; index++){
        const popupLink = popupLinks[index];
        popupLink.addEventListener('click', function (e) {
            const popupName = popupLink.getAttribute('href').replace('#', '');
            const curentPopup = document.getElementById(popupName);
            popupOpen(curentPopup);
            e.preventDefault();
        });
    }
}

const popupCloseIcon = document.querySelectorAll('.close-popup');
if(popupCloseIcon.length > 0) {
    for(let index = 0; index < popupCloseIcon.length; index++) {
        const el = popupCloseIcon[index];
        el.addEventListener('click', function (e) {
            popupClose(el.closest('.popup'));
            e.preventDefault();
        });
    }
}

function popupOpen(curentPopup) {
    if(curentPopup && unlock) {
        const popupActive = document.querySelector('.popup.open');
        if(popupActive) {
            popupClose(popupActive, false);
        } else {
            bodyLock();
        }
        curentPopup.classList.add('open');
        curentPopup.addEventListener('click', function (e) {
            if(!e.target.closest('.popup__content')) {
                popupClose(e.target.closest('.popup'));
            }
        });
    }
}

function popupClose(popupActive, doUnlock = true) {
    if (unlock) {
        popupActive.classList.remove('open');
        if (doUnlock) {
            bodyUnLock();
        }
    }
}

function bodyLock() {
    html.classList.add('lock');
    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
}

function bodyUnLock() {
    setTimeout(function () {
        html.classList.remove('lock');
    }, timeout);

    unlock = false;
    setTimeout(function (){
        unlock = true;        
    }, timeout);
}

document.addEventListener('keydown', function (e) {
    if(e.which === 27) {
    const popupActive = document.querySelector('.popup.open');
    popupClose(popupActive);
    }
});

(function () {
    if(!Element.prototype.closest) {
        Element.prototype.closest = function (css) {
            var node = this;
            while (node) {
                if (node.matches(css)) return node;
                else node = node.parentElement;
            }
            return null;
        };
    }
})

//Counter 2
var time1 = 2,
  cc1 = 1;
$(window).scroll(function() {
  $('#ourteam').each(function() {
    var
      cPos1 = $(this).offset().top,
      topWindow = $(window).scrollTop();
    if (cPos1 < topWindow + 200) {
      if (cc1 < 2) {
        $(".number-1").addClass("show-1");
        $('div').each(function() {
          var
            i = 1,
            num = $(this).data('num'),
            step = 1000 * time1 / num,
            that = $(this),
            int = setInterval(function() {
              if (i <= num) {
                that.html(i);
              } else {
                cc1 = cc1 + 2;
                clearInterval(int);
              }
              i++;
            }, step);
        });
      }
    }
  });
});


// Contact us map with popups
$(".feature").hover(function(e) {
	e.preventDefault();

	$('.map-popup[data-number], .map-down-arrow[data-number]').hide();

	var item = $(this).data('number');
	$('.map-popup[data-number="' + item + '"]').show();
	$('.map-down-arrow[data-number="' + item + '"]').show();
	var title = $('.map-popup-title[data-number="' + item + '"]').text();
	$('#input_2_5').find('option[value="' + title + '"]').attr('selected', true);
},
function () {
	$('.map-popup, .map-down-arrow').hide();
});


//Slick Slider
$(document).ready(function(){
    $('.slider').slick({
        infinite: true,
        arrows: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: ".slider-dependent",  
        centerMode: true,
        //centerPadding: '60px', 
        focusOnSelect: true,
        //zIndex: 1050,
        //focusOnSelect: true,
        //adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1650,
                settings: {
                  slidesToShow: 5,
                  slidesToScroll: 1,                  
                }
              },
              {
                breakpoint: 1350,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 1,                  
                }
              },
              {
                breakpoint: 1050,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,                  
                }
              },
              {
                breakpoint: 767,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,                  
                }
              },
              {
                breakpoint: 550,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,                  
                }
              },
        ]
    });
});


$(document).ready(function(){
    $('.slider-dependent').slick({
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        asNavFor: ".slider",
        zIndex: 0,
        responsive: [
            {
                breakpoint: 650,
                settings: {
                    fade: false,   
                    dots: true,              
                }
              },
        ]      
        
    });
});


$(document).ready(function(){
  $('.slider-portfolio').slick({    
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 2,
    //centerMode: true,
    focusOnSelect: true,
    dots: true,
    infinite: true,
    responsive: [
      {
          breakpoint: 700,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,              
          }
        },
        
  ]      
  });
});  


//Menu page scroll
document.querySelectorAll('a[href^="#"').forEach(link => {

    link.addEventListener('click', function(e) {
        e.preventDefault();

        let href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);

        const topOffset = document.querySelector('.header').offsetHeight;
        // const topOffset = 0; // если не нужен отступ сверху 
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});