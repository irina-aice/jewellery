'use strict';

(function () {
  const collapsibleTitles = document.querySelectorAll('.js-collapsible-title');
  const collapsibleContent = document.querySelectorAll('.js-collapsible-content');

  collapsibleContent.forEach((content) => {
    const title = content.previousElementSibling;

    if (title.getAttribute('aria-expanded') === 'true') {
      return;
    }

    content.hidden = true;
  });

  collapsibleTitles.forEach((title) => {
    const content = title.nextElementSibling;

    title.addEventListener('click', () => {
      const expanded = title.getAttribute('aria-expanded') === 'true' || false;

      title.setAttribute('aria-expanded', !expanded);
      content.hidden = expanded;
    });
  });
})();

'use strict';

(function () {
  const button = document.querySelector('.js-filter-show');
  const FILTER_ID = 'filter';

  if (!button) {
    return false;
  }

  button.addEventListener('click', (evt) => {
    evt.preventDefault();

    window.MicroModal.show(FILTER_ID, {
      openClass: 'filter--open',
      disableScroll: true,
    });
  });
})();

'use strict';

(function () {
  const form = document.querySelector('.js-form');

  if (!form) {
    return false;
  }

  const emailField = form.querySelector('[name="email"]');

  if (!emailField) {
    return false;
  }

  if (localStorage.getItem(emailField.name)) {
    emailField.value = localStorage.getItem(emailField.name);
  }

  form.addEventListener('submit', () => {
    localStorage.setItem(emailField.name, emailField.value);
  });
})();

'use strict';

(function () {
  const links = document.querySelectorAll('a[data-micromodal-trigger]');

  if (!links.length) {
    return false;
  }

  links.forEach((link) => {
    link.addEventListener('click', (evt) => {
      evt.preventDefault();

      const modalId = link.getAttribute('data-micromodal-trigger');

      window.MicroModal.show(modalId, {
        openClass: 'modal--open',
        disableScroll: true,
      });
    });
  });
})();

'use strict';

(function () {
  const headerOpenedClass = 'header--opened';
  const headerClosedClass = 'header--closed';

  const header = document.querySelector('.js-header');
  const headerButton = document.querySelector('.js-header-menu-btn');

  if (!header || !headerButton) {
    return false;
  }

  header.classList.add(headerClosedClass);

  const open = function() {
    header.classList.remove(headerClosedClass);
    header.classList.add(headerOpenedClass);
  };

  const close = function() {
    header.classList.add(headerClosedClass);
    header.classList.remove(headerOpenedClass);
  };

  headerButton.addEventListener('click', () => {
    if (header.classList.contains(headerClosedClass)) {
      open();
    } else {
      close();
    }
  });
})();

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
