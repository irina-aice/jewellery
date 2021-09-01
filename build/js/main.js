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

      //hide others
      collapsibleTitles.forEach((colTitle) => {
        if (title.isEqualNode(colTitle)) {
          return true;
        }

        const colContent = colTitle.nextElementSibling;

        colTitle.setAttribute('aria-expanded', 'false');
        colContent.hidden = true;
      });
    });
  });
})();

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
