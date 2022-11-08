$('.hamburger').click(function(e) {
    $('body').toggleClass('in');
    $('.hamburger').toggleClass('is-active');
    e.stopPropagation();
});

