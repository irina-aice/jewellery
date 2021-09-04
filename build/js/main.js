'use strict';

(function () {
  const collapsibleTitles = document.querySelectorAll('.js-collapsible-title');
  const collapsibleContent = document.querySelectorAll('.js-collapsible-content');

  collapsibleContent.forEach((content) => {
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
        debugMode: true,
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
