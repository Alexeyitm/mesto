const enanleValidation = (obj) => {
  const formList = Array.from(document.querySelectorAll(obj.form));

  formList.forEach((formElement) => { 
    setEventListeners(obj, formElement);
  });
};

const setEventListeners = (obj, formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(obj.input));

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      handleFormInput(obj, inputElement, formElement);
    });
  });
}; 

const handleFormInput = (obj, inputElement, formElement) => {
  const input = inputElement;
  const form = formElement;

  setCustomError(obj, input);
  setFieldError(input, input.validationMessage);
  setSubmitButtonState(obj, form);
};

const setCustomError = (obj, input) => {
  if (!input.validity.valid) {
    input.classList.add(obj.inputInvalid);
  }
  else {
    input.classList.remove(obj.inputInvalid);
  }
};

const setFieldError = (input, errorMessage) => {
  const span = document.querySelector(`#${input.id}-error`);
  span.textContent = errorMessage;
};

const setSubmitButtonState = (obj, form) => {
  const button = form.querySelector(obj.buttonAddPopup);
  isValid = form.checkValidity();

  if (isValid) {
    button.classList.remove(obj.buttonAddPopupInvalid);
    button.classList.add(obj.buttonAddPopupHover);
    button.removeAttribute('disabled');
  }
  else {
    button.classList.add(obj.buttonAddPopupInvalid);
    button.classList.remove(obj.buttonAddPopupHover);
    button.setAttribute('disabled', 'disabled');
  };
};

 

enanleValidation({
  form: '.popup__form',
  input: '.popup__input',
  buttonAddPopup: '.popup__button-add',
  buttonAddPopupInvalid: 'popup__button-add_invalid',
  buttonAddPopupHover: 'popup__button-add_hover',
  inputInvalid: 'popup__input_invalid'
});

