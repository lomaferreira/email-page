const form = document.querySelector('form');
const input = document.querySelector('#email');
const Emailregex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  //escrever no html
const resp = document.querySelector('.resp-erro');
var textValid = document.createTextNode('Valid Email Address');
var textInvalid = document.createTextNode('Please provide a valid email ');
;
const validateInput = () => {
  if (Emailregex.test(input.value)) {
    resp.appendChild(textValid);
  } else {
     resp.appendChild(textInvalid);
  }
};

form.addEventListener('submit', (e) => {
  e.preventDefault(validateInput());
});
