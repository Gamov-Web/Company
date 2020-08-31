$(document).ready(function() {
    
    $('.trucking__slider').slick({
        prevArrow:'<button type="button" class="slick-prev"><img src="images/arrow-prev.svg" alt="">Назад</button>',
        nextArrow:'<button type="button" class="slick-next">След<img src="images/arrow-next.svg" alt=""></button>'
    });

    $('.menu-btn').on('click', function () {
        $('.menu').addClass('menu--active');
    });
    
    $('.menu__btnclose').on('click', function () {
        $('.menu').removeClass('menu--active');
    });

});

