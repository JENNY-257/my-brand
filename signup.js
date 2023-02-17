const form = document.querySelector('form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const usernameError = document.querySelector('#username-error');
const emailError = document.querySelector('#email-error');
const passwordError = document.querySelector('#password-error');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (username.value === '') {
    usernameError.textContent = 'Please enter a username.';
    usernameError.style.color = 'red';
  } else {
    usernameError.textContent = '';
  }

  if (email.value === '') {
    emailError.textContent = 'Please enter an email.';
    emailError.style.color = 'red';
  } else {
    emailError.textContent = '';
  }

  if (password.value === '') {
    passwordError.textContent = 'Please enter a password.';
    passwordError.style.color = 'red';
  } else {
    passwordError.textContent = '';
  }
});
