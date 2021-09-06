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
