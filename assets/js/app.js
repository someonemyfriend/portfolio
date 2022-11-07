//loader
function counter(){
  let count = setInterval(function(){
    let c = parseInt($('.counter').text());
    $('.counter').text((++c).toString());
    if (c == 100){
      clearInterval(count);
      $('.counter').addClass('hide');
      $('.preloader').addClass('active');
    }
  },60)
}
counter();

// Cursor animation
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX -10) + "px;" )
})

document.addEventListener('click', () => {
    cursor.classList.add("expand");
    
    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500)
})



var slider = $(".slider-item");
var scrollCount = null;
var scroll= null;

slider
    .slick({
        dots: true
    });

slider.on('wheel', (function(e) {
    e.preventDefault();

    clearTimeout(scroll);
    scroll = setTimeout(function(){scrollCount=0;}, 200);
    if(scrollCount) return 0;
    scrollCount=1;

    if (e.originalEvent.deltaY < 0) {
        $(this).slick('slickNext');
        console.log('next');
    } else {
        $(this).slick('slickPrev');
    }
}));

  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.center'
  });
//   $('.slider-nav').slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     asNavFor: '.slider-for',
//     dots: true,
//     centerMode: true,
//     arrows: false,
//     focusOnSelect: true
//   });



  $('.center').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToScroll: 1,
    slidesToShow: 3,
    arrows: false,
    dots: true,
    asNavFor: '.slider-for',
    focusOnSelect: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });