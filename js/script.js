$(document).ready(function() {
    $('.header__button').click(function() {
        $('.header__button, .header__menu').toggleClass('active');
    })
    $('.header__link').click(function() {
        $('.header__button, .header__menu').removeClass('active');
    })

    $('.slider__main').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: '40px',
                  slidesToShow: 2
                }
              },

          {
            breakpoint: 900,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
      });
})