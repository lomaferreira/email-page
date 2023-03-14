const form = document.querySelector('form');
const input = document.querySelector('input[name="email"]');
const btn = document.querySelector('#button');

const validateInput = () => {
  if (!input.value) {
    //INDICA PRA PEGAR O PROXIMO ELEMENTO//
    btn.nextElementSibling.classList.remove('resp-erro');

  }
};

form.addEventListener('submit', (e) => {
  e.preventDefault(validateInput());
});
