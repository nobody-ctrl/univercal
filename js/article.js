$('.mains__bookmark').click(function(){
    var element = $('.mains__bookmark').children().eq(0).children().eq(0);
    var color = element.attr('fill');
    if(color == 'white'){
        element.attr({'fill' : '#FF4F52'});
    }else{
        element.attr({'fill' : 'white'})
    }
});

$('.menu').click(function(){
    $('.mobile').toggleClass('mobile-visible');
    $('body').toggleClass('body-overflow-hidden');
});

$('.newsletter__form').validate({
    errorClass: "message-box",
    messages: {
        email: {
          required: "Пожалуйста, Ваш email!",
          email: "Введите правильный email!"
        }
    }    
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
          required: "Введите ваше имя!",
          minlength: "Как минимум 2 буквы!"
        },
        emails: {
          required: "Введите почту!",
          email: "Образец: name@domain.com",
        },
        theme: {
            required: "Выберите тему!",
        },
        message: {
          required: "Введите сообщение!",
        },
      },
    });
  });
  
});

var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    keyboard: {
      enabled: true
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});

$('.comments__load').click(function(){
  $('.comments__comment-hide').toggleClass('comments__comment-visible');
  var t = $('.comments__load-text').text();
  var thisstring = String("загрузить еще");
  if (t.valueOf() == thisstring.valueOf()){
    $('.comments__load-text').text("скрыть");
  }else{
    $('.comments__load-text').text("загрузить еще");
  }
});


$('.comments__opinion-form').validate({
  errorClass: "message-box-modal",
  messages: {
      message: {
        required: "Введите сообщение!",
        minlength: "Нужно как минимум 100 букв!"
      }
  }    
});

$('.error__button').click(function(){
  window.location.href = "https://anastasia-petrova.com/universal/index.html";
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