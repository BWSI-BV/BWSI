$('.back-to-top').click(function () {
    $('body,html').animate({ scrollTop: 0}, 800); // 800 - Скорость анимации
});

$(window).scroll(function() { // Отслеживаем начало прокрутки
    let scrolled = $(window).scrollTop(); // Вычисляем сколько было прокручено.

    if(scrolled > 350) { // Если высота прокрутки больше 350 - показываем кнопку
        $('.back-to-top').addClass('active');
    } else {
        $('.back-to-top').removeClass('active');
    }
});

$('.request-about__button').click(function () {
    $('html, body').animate({
    scrollTop: $(".main-final__form-request").offset().top // класс объекта к которому приезжаем
    }, 800); // Скорость прокрутки
});

let checkConnection = false

$('.connection-button').click(function () {
    if (checkConnection == false) {
        $('.connection-button__btn-show').removeClass('connection-button__btn-active')
        $('.connection-button__btn-hide').addClass('connection-button__btn-active')
        $('.connection-item').addClass('connection-item__active')
        checkConnection = true
    }
    else {
        $('.connection-button__btn-hide').removeClass('connection-button__btn-active')
        $('.connection-button__btn-show').addClass('connection-button__btn-active')
        $('.connection-item').removeClass('connection-item__active')
        checkConnection = false
    }
});