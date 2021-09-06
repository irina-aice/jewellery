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
