$('.page-banner').slick({
    nextArrow: '<button type="button" class="slick-next"> <img src="../img/next.svg" class="page-banner__arrow-icon page-banner__arrow_next" alt="next" title="next"> </button>',
    prevArrow: '<button type="button" class="slick-prev"> <img src="../img/prev.svg" class="page-banner__arrow-icon page-banner__arrow_prev" alt="prev" title="prev"> </button>'
});

let hamburger = $('.mobile-panel__hamburger');
let menu = $('.page-nav');
let menuJs = document.querySelector('.page-nav');

hamburger.on('click', function () {
    if(getComputedStyle(menuJs).display === 'none'){
        hamburger.addClass('open');
        menu.show();
    }else{
        menu.hide();
        hamburger.removeClass('open');
    }
});

