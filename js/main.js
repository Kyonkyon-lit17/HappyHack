$(function($){
    $('.firstv').bgSwitcher({
        images:['images/background1.jpg', 'images/background2.jpg','images/background3.jpg','images/background4.jpg','images/background5.jpg'],
        interval:5000,
        loop:true,
    });
        var slideCount;
        var windowWidth=$(window).width();

        if(windowWidth<=768){
            slideCount=2;
        }else if (windowWidth<=1200){
            slideCount = 3;
        }else{
            slideCount=4;
        }

$('.slidebox').slick({
    slidesToShow:slideCount,
    slidesToScroll:1,
    arrows:true,
    autoplay:true,
    autoplaySpeed:3000,
    dots:true
     })
})
