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
    rowCount++;
});

$('.menu').click(function(){
    $('.mobile').toggleClass('mobile-visible');
    $('body').toggleClass('body-overflow-hidden');
});

var mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
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