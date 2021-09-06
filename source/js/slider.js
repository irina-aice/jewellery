'use strict';

(function () {
  const slider = document.querySelector('.js-slider');
  const pagination = document.querySelector('.js-slider-pagination');
  const nextEl = document.querySelector('.js-slider-next');
  const prevEl = document.querySelector('.js-slider-prev');

  if (!slider || !pagination || !nextEl || !prevEl) {
    return false;
  }

  new window.Swiper(slider, {
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 30,
    pagination: {
      el: pagination,
      type: 'fraction',
      renderFraction: function(currentClass, totalClass) {
        return `<span class="${currentClass}"></span> <span class="slider__divider">of</span> <span class="${totalClass}"></span>`;
      },
    },
    navigation: {
      nextEl: nextEl,
      prevEl: prevEl,
    },
    breakpoints: {
      768: {
        pagination: {
          type: 'bullets',
          clickable: true,
          bulletClass: 'slider__number',
          bulletActiveClass: 'slider__number--active',
          renderBullet: function (index, className) {
            return `<span class="${className}">${index + 1}</span>`;
          },
        },
      },
      1024: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        pagination: {
          type: 'bullets',
          clickable: true,
          bulletClass: 'slider__number',
          bulletActiveClass: 'slider__number--active',
          renderBullet: function (index, className) {
            return `<span class="${className}">${index + 1}</span>`;
          },
        },
      },
    },
  });
})();
