$(document).ready(function(){
  $(".about-us__slider").slick({
    arrows:true,
    // dots:true,
    adaptiveHeight:true,
    // slidesToShow:2,
    // slidesToScroll:3,
    speed: 900,
    // easing:'cubic-bezier(1,.03,1,.2)',
    infinite: false,
    // autoplay:true,
    // autoplaySpeed:500,
    // pauseOnFocus:true,
    // pauseOnHover:true,
    // pauseOnDotsHover:true,
    // touchThreshold:10,
    // touchMove:false,
    // waitForAnimate:true,
    // centerMode:true,
    // variableWidth:true,
    // rows:1,
    // slidesPerRow:1,
    // vertical:true,
    // verticalSwiping:true,
    // fade:true,
    // appendArrows:$('about-us__slider__item'),
  });

  // ПОДІЇ

  // $('.about-us__slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
  //   console.log(nextSlide);
  // });
  // $('.about-us__slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
  //   console.log(nextSlide);
  // });

  // Методи

  // ('.about-us__slider').slick('setPosition');
  // ('.about-us__slider').slick('goTo', 3) ;
});