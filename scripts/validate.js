const enanleValidation = (obj) => {
  const forms = document.querySelectorAll(obj.form);

  forms.forEach((ele) => {
    ele.addEventListener('input', handleFormInput);
  });
};

const handleFormInput = (evt) => {
  const form = evt.currentTarget;
  const input = evt.target;

  setCustomError(input);
  setSubmitButtonState(form);
};

const setCustomError = (input) => {
  const validity = input.validity;
  const currentLength = input.value.length;

  input.setCustomValidity('');
  input.classList.remove(setting.inputInvalid);
  setFieldError(input, input.validationMessage);

  if (currentLength == 0) {
    input.classList.add(setting.inputInvalid);
  };

  if (validity.tooShort || validity.tooLong) {
    const min = input.getAttribute('minlength');
    input.classList.add(setting.inputInvalid);
  };

  if (validity.typeMismatch) {
    input.classList.add(setting.inputInvalid);
  };
};

const setFieldError = (input, errorMessage) => {
  const span = document.querySelector(`#${input.id}-error`);
  span.textContent = errorMessage;
};

const setSubmitButtonState = (form) => {
  const button = form.querySelector(setting.buttonAddPopup);
  isValid = form.checkValidity();

  if (isValid) {
    button.classList.remove(setting.buttonAddPopupInvalid);
    button.classList.add(setting.buttonAddPopupHover);
    button.removeAttribute('disabled');
  }
  else {
    button.classList.add(setting.buttonAddPopupInvalid);
    button.classList.remove(setting.buttonAddPopupHover);
    button.setAttribute('disabled', 'disabled');
  };
};



const setting = {
  form: '.popup__form',
  buttonAddPopup: '.popup__button-add',
  buttonAddPopupInvalid: 'popup__button-add_invalid',
  buttonAddPopupHover: 'popup__button-add_hover',
  inputInvalid: 'popup__input_invalid'
}

enanleValidation(setting);

