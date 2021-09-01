'use strict';

(function () {
  const headerOpenedClass = 'js-header--opened';
  const headerClosedClass = 'js-header--closed';

  const header = document.querySelector('.header');
  const headerButton = document.querySelector('.header__button');

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
