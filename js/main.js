$(function($){
    $('.firstv').bgSwitcher({
        images:['images/background1.jpg', 'images/background2.jpg','images/background3.jpg','images/background4.jpg','images/background5.jpg'],
        interval:5000,
        loop:true,
    });
$('.slidebox').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  dots:true,
  autoplaySpeed: 3000,

  responsive: [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 400,
      settings:{
        slidesToShow: 1
      }
    }

  ]
})
particlesJS("particles-js", {
  particles: {
    number: { value: 60 },
    size: { value: 3 },
    color: { value: "#fcfcfc" },
    line_linked: { enable: true },
    speed:6
  }
});
})