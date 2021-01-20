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
});

var mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,

    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: 'true'
    },
})

$('.newsletter__form').validate({
    errorClass: "message-box",
    messages: {
        email: {
          required: "Please, email here!",
          email: "Please, correct email!"
        }
    }    
});