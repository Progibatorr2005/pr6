document.getElementsByClassName("heading__p--dalee")[0].addEventListener("click", () => {
  document.getElementsByClassName("heading__p")[0].classList.toggle("heading__p--active");
} );

  document.getElementsByClassName("swiper__button")[1].addEventListener("click", () => {
    document.getElementsByClassName("swiper-wrapper")[1].classList.toggle("swiper-wrapper--active");
  } );

  document.getElementsByClassName("swiper__button")[2].addEventListener("click", () => {
    document.getElementsByClassName("swiper-wrapper")[2].classList.toggle("swiper-wrapper--active");
  } );

  const swiper = new Swiper('.swiper', {
    slidesPerView: 'auto',
    spaceBetween: 16,
    observer: true,
    breakpoints: {
      850: {
        spaceBetween: 0,
        enabled: false
      },
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'bullets',
    },
  });