const updatesForm = document.getElementById('updates-form');
const emailInput = document.getElementById('email');
const errorMessage = document.querySelector('.error-message');
const errorIcon = document.getElementById('error-icon');

let readyEmail = '';

document.addEventListener('DOMContentLoaded', () => {
  emailInput.addEventListener('keyup', (e) => {
    readyEmail = validateInputs(e.target.value, e.target);
  });
  updatesForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (readyEmail) {
      let senderEmail = emailInput.value;
      console.log(senderEmail);
    }
  });
});

function validateInputs(fieldValue, element) {
  if (fieldValue === '') {
    setSuccess(element);
    console.log('hello');
  } else if (!isValidEmail(fieldValue)) {
    setError(element, "Whoops, make sure it's an email");
    return false;
  } else {
    setSuccess(element);
    return true;
  }
}
const setError = (element, message) => {
  const formGroup = element.parentElement;
  const errorDisplay = formGroup.querySelector('.error-message');
  errorDisplay.classList.add('displayError');
  errorDisplay.innerText = message;
  errorIcon.classList.add('show');
  formGroup.classList.add('error');
};

const setSuccess = (element) => {
  const formGroup = element.parentElement;
  const errorDisplay = formGroup.querySelector('.error-message');
  errorDisplay.classList.remove('displayError');
  errorDisplay.innerText = '';
  errorIcon.classList.remove('show');
  formGroup.classList.remove('error');
};

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};
