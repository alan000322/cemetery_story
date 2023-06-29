$(window).on('scroll', function () {
    var scrollElement = $('.topic-1');
    var windowHeight = $(window).height();
    var windowScrollTop = $(window).scrollTop();
    var elementOffsetTop = scrollElement.offset().top;

    if (windowScrollTop + windowHeight >= elementOffsetTop) {
        scrollElement.addClass('animate__animated animate__fadeIn');
    } 
});

$(window).on('scroll', function () {
    var scrollElement = $('.chapter-1');
    var windowHeight = $(window).height();
    var windowScrollTop = $(window).scrollTop();
    var elementOffsetTop = scrollElement.offset().top;

    if (windowScrollTop + windowHeight >= elementOffsetTop) {
        scrollElement.addClass('animate__animated animate__fadeIn animate__delay-1s');
    } 
});
$(window).on('scroll', function () {
    var scrollElement = $('.topic-2');
    var windowHeight = $(window).height();
    var windowScrollTop = $(window).scrollTop();
    var elementOffsetTop = scrollElement.offset().top;

    if (windowScrollTop + windowHeight >= elementOffsetTop) {
        scrollElement.addClass('animate__animated animate__fadeIn');
    } 
});

$(window).on('scroll', function () {
    var scrollElement = $('.chapter-2');
    var windowHeight = $(window).height();
    var windowScrollTop = $(window).scrollTop();
    var elementOffsetTop = scrollElement.offset().top;

    if (windowScrollTop + windowHeight >= elementOffsetTop) {
        scrollElement.addClass('animate__animated animate__fadeIn animate__delay-1s');
    } 
});
$(window).on('scroll', function () {
    var scrollElement = $('.topic-3');
    var windowHeight = $(window).height();
    var windowScrollTop = $(window).scrollTop();
    var elementOffsetTop = scrollElement.offset().top;

    if (windowScrollTop + windowHeight >= elementOffsetTop) {
        scrollElement.addClass('animate__animated animate__fadeIn animate__delay-1s');
    } 
});
$(window).on('scroll', function () {
    var scrollElement = $('.topic-4');
    var windowHeight = $(window).height();
    var windowScrollTop = $(window).scrollTop();
    var elementOffsetTop = scrollElement.offset().top;

    if (windowScrollTop + windowHeight >= elementOffsetTop) {
        scrollElement.addClass('animate__animated animate__fadeIn');
    } 
});
$(window).on('scroll', function () {
    var scrollElement = $('.solution-card-5');
    var windowHeight = $(window).height();
    var windowScrollTop = $(window).scrollTop();
    var elementOffsetTop = scrollElement.offset().top;

    if (windowScrollTop + windowHeight >= elementOffsetTop) {
        scrollElement.addClass('animate__animated animate__fadeIn');
    } 
});
$(window).on('scroll', function () {
    var scrollElement = $('.solution-card-4');
    var windowHeight = $(window).height();
    var windowScrollTop = $(window).scrollTop();
    var elementOffsetTop = scrollElement.offset().top;

    if (windowScrollTop + windowHeight >= elementOffsetTop) {
        scrollElement.addClass('animate__animated animate__fadeIn');
    } 
});
$(window).on('scroll', function () {
    var scrollElement = $('.solution-card-1');
    var windowHeight = $(window).height();
    var windowScrollTop = $(window).scrollTop();
    var elementOffsetTop = scrollElement.offset().top;

    if (windowScrollTop + windowHeight >= elementOffsetTop) {
        scrollElement.addClass('animate__animated animate__fadeIn');
    } 
});
$(window).on('scroll', function () {
    var scrollElement = $('.solution-card-2');
    var windowHeight = $(window).height();
    var windowScrollTop = $(window).scrollTop();
    var elementOffsetTop = scrollElement.offset().top;

    if (windowScrollTop + windowHeight >= elementOffsetTop) {
        scrollElement.addClass('animate__animated animate__fadeIn');
    } 
});
$(window).on('scroll', function () {
    var scrollElement = $('.solution-card-3');
    var windowHeight = $(window).height();
    var windowScrollTop = $(window).scrollTop();
    var elementOffsetTop = scrollElement.offset().top;

    if (windowScrollTop + windowHeight >= elementOffsetTop) {
        scrollElement.addClass('animate__animated animate__fadeIn');
    } 
});

$(window).on('scroll', function () {
    var scrollElement = $('.chapter-3');
    var windowHeight = $(window).height();
    var windowScrollTop = $(window).scrollTop();
    var elementOffsetTop = scrollElement.offset().top;

    if (windowScrollTop + windowHeight >= elementOffsetTop) {
        scrollElement.addClass('animate__animated animate__fadeIn animate__delay-1s');
    } 
});



$(document).ready(function() {
    var guide = $('.guide');
    setTimeout(function() {
        guide.addClass('d-none');
    }, 10000);
    });
// Set the timeout