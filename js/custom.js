
$('.about-main').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 575,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 1,
          slideToScroll:4,
          Infinity:true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 2,
          slideToScroll:4,
          Infinity:true,
        }
      },
      {
        breakpoint: 991.98,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 2,
          slideToScroll:4,
          Infinity:true,
        }
      },
    ]
  });

  $('.counter').counterUp({
    delay: 10,
    time: 1000
});

$('.text-main').slick({
  slidesToShow: 1,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 2000,
  nextArrow: "next",
    prevArrow: "prev",
});


/*back-2-top start*/
  $(".back-2-top").click(function(){
    $("html,body").animate({scrollTop:0 ,},1000);
  });
/*back-2-top end*/

/*background color auto remave & back to top start*/
$(window).scroll(function(){
  var scrolling=$(this).scrollTop();
  
  if(scrolling<20)
  {$(".bg-main").addClass("bg");}
  else{$(".bg-main").removeClass("bg");}
  
  if(scrolling>20)
  {$(".back-2-top").fadeIn(500);}
  else{$(".back-2-top").fadeOut(500);}
  });
/*background color auto remave & back to top end*/

/*preloader start*/
$(window).on("load",function(){
$(".preloader").delay(500).fadeOut(500);
});
/*preloader end*/


/*right button start*/
$(".button").click(function(){
  $(".close").toggleClass("right-bt");
});
/*right button end*/
/*3d card rotater start*/ 


/* 3d card ratotor end*/ 