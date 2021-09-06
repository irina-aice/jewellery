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
