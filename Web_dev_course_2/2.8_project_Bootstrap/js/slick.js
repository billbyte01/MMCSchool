$('.team-carousel').slick({
    arrows: false,
    autoplay: true,
    infinite: true,
    mobileFirst: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
            }
        },
    ],
    slidesToShow: 1,
    slidesToScroll: 2
  });