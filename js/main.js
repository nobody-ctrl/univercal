var rowCount = 0;
$(".right-block__text-header").each(function(i) {
    if(rowCount %5 == 0){
        $(".right-block__text-header").eq(rowCount).css({"color": "#3BBDC4"});
    }else if(rowCount %5 == 1){
        $(".right-block__text-header").eq(rowCount).css({"color": "#6E99AE"});
    }else if(rowCount %5 == 2){
        $(".right-block__text-header").eq(rowCount).css({"color": "#AC8EE3"});
    }else if(rowCount %5 == 3){
        $(".right-block__text-header").eq(rowCount).css({"color": "#FFA34D"});
    }else{
        $(".right-block__text-header").eq(rowCount).css({"color": "#3DC47E"});
    }
    rowCount += 1;
});

$('.menu').click(function(){
    $('.mobile').toggleClass('mobile-visible');
    $('body').toggleClass('body-overflow-hidden');
});

var mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    observer: true,
    observeParents: true,
    lazy: true,
    autoplay: {
        delay: 3000,
      },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: 'true'
    },
})

$('.news__book').on("click", function() {
    $(this).children(":first").toggleClass('news__book-color-red');
});

$('.newsletter__form').validate({
    errorClass: "message-box",
    messages: {
        email: {
          required: "Please, email here!",
          email: "Please, correct email!"
        }
    }    
});

$('.right-block__link').click(function(){

    var header = $(this).children().eq(0).children().eq(0);
    var headerColor = header.css('color');
    var descr = $(this).children().eq(0).children().eq(1);

    $('.text-block__first').text(header.text());
    $('.text-block__first').css({'color' : headerColor});

    $('.text-block__second').text(descr.text());

    var names = ['Оксана Фомина', 'Станислав Гордеев', 'Ирина Фельдман', 'Мария Жукова', 'Игорь Поддубный'];
    var titles = ['Фотограф', 'Путешественник', 'Разработчик', 'Блогер', 'Студент'];
    var number = 0;
    if(headerColor == 'rgb(59, 189, 196)'){
        number = 0;
        $('.hero__image').attr({'src' : 'img/hero-five.jpg'});
        $('.avatar-block__img').attr({'src' : 'img/one.jpg'});
    }else if(headerColor == 'rgb(110, 153, 174)'){
        number = 1;
        $('.hero__image').attr({'src' : 'img/hero-second.png'});
        $('.avatar-block__img').attr({'src' : 'img/two.jpg'});
    }else if (headerColor == 'rgb(172, 142, 227)'){
        number = 2;
        $('.hero__image').attr({'src' : 'img/hero-first.jpg'});
        $('.avatar-block__img').attr({'src' : 'img/three.jpg'});
    }else if(headerColor == 'rgb(255, 163, 77)'){
        number = 3;
        $('.hero__image').attr({'src' : 'img/hero-four.jpg'});
        $('.avatar-block__img').attr({'src' : 'img/four.jpg'});
    }else{
        number = 4;
        $('.hero__image').attr({'src' : 'img/hero-first.jpg'});
        $('.avatar-block__img').attr({'src' : 'img/five.jpg'});
    }
    $('.avatar-block__text-one').text(names[number]);
    $('.avatar-block__text-two').text(titles[number]);
});

$('.modal-call').click(function(){
    $('.modal__overlay').addClass('modal__overlay--visible');
    $('.modal__dialog').addClass('modal__dialog--visible');
    $('body').addClass('body-overflow-hidden');
});
$('.modal__close').click(function(){
    $('.modal__overlay').removeClass('modal__overlay--visible');
    $('.modal__dialog').removeClass('modal__dialog--visible');
    $('body').removeClass('body-overflow-hidden');
});
$('.modal__overlay').click(function(){
    $('.modal__overlay').removeClass('modal__overlay--visible');
    $('.modal__dialog').removeClass('modal__dialog--visible');
    $('body').removeClass('body-overflow-hidden');
});

$(document).keyup(function(e) {
    if (e.key === "Escape") {
        $('.modal__overlay').removeClass('modal__overlay--visible');
        $('.modal__dialog').removeClass('modal__dialog--visible');
        $('body').removeClass('body-overflow-hidden');
   }
});




function checkField(){
    if($('.modal__checkbox-box').prop("checked") == false){
        $('.modal__label-checkbox').css({color: "red"});
        return false;
    }else{
        $('.modal__label-checkbox').css({color: "#4B5157"});
    }
};


$('.modal__checkbox-box').change(function() {
    if ($(this).is(':checked')) {
        $('.modal__label-checkbox').css({color: "#4B5157"});
    }else{
        $('.modal__label-checkbox').css({color: "red"});
    }
});


$(document).ready(function(){
    $('.form-validation').each( function() {
      $(this).validate({
        errorClass: "message-box-modal",
        ignore: ".modal__checkbox-box",
        messages: {
          name: {
            required: "Please, specify your name",
            minlength: "At least 2 letters please!"
          },
          email: {
            required: "Your email is required",
            email: "Please, name@domain.com",
          },
        },
      });
    });
    
});




$('.money__button').click(function(){
    window.location.href = "https://anastasia-petrova.com/universal/article.html";
});
$('.text-block__third').click(function(){
    window.location.href = "https://anastasia-petrova.com/universal/article.html";
});

//here is lazy loading technuique
document.addEventListener("DOMContentLoaded", function() {
    var lazyloadImages = document.querySelectorAll("img.lazy");    
    var lazyloadThrottleTimeout;
    
    function lazyload () {
      if(lazyloadThrottleTimeout) {
        clearTimeout(lazyloadThrottleTimeout);
      }    
      
      lazyloadThrottleTimeout = setTimeout(function() {
          var scrollTop = window.pageYOffset;
          lazyloadImages.forEach(function(img) {
              if(img.offsetTop < (window.innerHeight + scrollTop)) {
                img.src = img.dataset.src;
                img.classList.remove('lazy');
              }
          });
          if(lazyloadImages.length == 0) { 
            document.removeEventListener("scroll", lazyload);
            window.removeEventListener("resize", lazyload);
            window.removeEventListener("orientationChange", lazyload);
          }
      }, 20);
    }
    
    document.addEventListener("scroll", lazyload);
    window.addEventListener("resize", lazyload);
    window.addEventListener("orientationChange", lazyload);
});




//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 



//load spater
$(document).ready(function(){
    setTimeout(
        function() 
        {
            var elem = $('.load-spater').attr('data-src');
            $('.load-spater').attr({'src' : elem});
        }, 400);
    setTimeout(
        function() 
        {
            $('.first-slide').css({"background" : "linear-gradient(0deg, rgba(64, 48, 61, 0.35), rgba(64, 48, 61, 0.35)), url('./img/another-first.jpg')"});
        }, 3000);
    setTimeout(
        function() 
        {
            $('.second-slide').css({"background" : "linear-gradient(0deg, rgba(64, 48, 61, 0.35), rgba(64, 48, 61, 0.35)), url('../img/another-second.jpg')"});
         }, 3000);
     setTimeout(
         function() 
         {
             $('.third-slide').css({"background" : "linear-gradient(0deg, rgba(64, 48, 61, 0.35), rgba(64, 48, 61, 0.35)), url('../img/another-three.jpg')"});
         }, 3000);
     setTimeout(
         function() 
         {
             $('.forth-slide').css({"background" : "linear-gradient(0deg, rgba(64, 48, 61, 0.35), rgba(64, 48, 61, 0.35)), url('../img/another-four.jpg')"});
         }, 3000);
     setTimeout(
         function() 
         {
             $('.fifth-slide').css({"background" : "linear-gradient(0deg, rgba(64, 48, 61, 0.35), rgba(64, 48, 61, 0.35)), url('../img/another-five.jpg')"});
         }, 3000);
});








