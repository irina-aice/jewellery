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
