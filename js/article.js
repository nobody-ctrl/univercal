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
          required: "Please, email here!",
          email: "Please, correct email!"
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
  var thisstring = new String("загрузить еще");
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
        required: "Please, message here!",
        minlength: "Please, at least 100 letters!"
      }
  }    
});