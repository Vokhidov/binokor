$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
    items:1,
    loop:true,
    dots:true,
    nav:true,
    lazyLoad:true,
    margin:10,
    navText: ["<img src='../icons/angle-left.png'>","<img src='../icons/angle-right.png'>"],
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true
        }
    );
  });