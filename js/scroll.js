window.addEventListener('load', () => { // ID откуда кливаем
    $('html, body').animate({
    scrollTop: $(".main-content").offset().top // класс объекта к которому приезжаем
    }, 800); // Скорость прокрутки
});