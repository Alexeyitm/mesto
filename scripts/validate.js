const enanleValidation = (obj) => {
  const formList = Array.from(document.querySelectorAll(obj.form)); 

  formList.forEach((form) => { 
    setEventListeners(form);
  });
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(setting.input));

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', handleFormInput);
  });
}; 

const handleFormInput = (evt) => {
  const input = evt.target;
  const form = evt.currentTarget.parentNode;

  setCustomError(input);
  setFieldError(input, input.validationMessage);
  setSubmitButtonState(form);
};

const setCustomError = (input) => {
  if (!input.validity.valid) {
    input.classList.add(setting.inputInvalid);
  }
  else {
    input.classList.remove(setting.inputInvalid);
  }
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
  input: '.popup__input',
  buttonAddPopup: '.popup__button-add',
  buttonAddPopupInvalid: 'popup__button-add_invalid',
  buttonAddPopupHover: 'popup__button-add_hover',
  inputInvalid: 'popup__input_invalid'
}

enanleValidation(setting);

