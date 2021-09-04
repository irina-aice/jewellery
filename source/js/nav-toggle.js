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
