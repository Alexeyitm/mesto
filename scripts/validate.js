const enanleValidation = (obj) => {
  const formEdit = document.querySelector(obj.formEdit);
  const formAdd = document.querySelector(obj.formAdd);

  formEdit.addEventListener('input', handleFormInput);
  formAdd.addEventListener('input', handleFormInput);
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
    setFieldError(input, `Вы пропустили это поле.`);
    input.classList.add(setting.inputInvalid);
  };

  if (validity.tooShort || validity.tooLong) {
    const min = input.getAttribute('minlength');
    setFieldError(input, `Минимальное количество символов: ${min}. Длина текста сейчас: ${currentLength} символ.`);
    input.classList.add(setting.inputInvalid);
  };

  if (validity.typeMismatch) {
    setFieldError(input, `Введите адрес сайта`);
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
  formEdit: '.popup__form_edit',
  formAdd: '.popup__form_add',
  buttonAddPopup: '.popup__button-add',
  buttonAddPopupInvalid: 'popup__button-add_invalid',
  buttonAddPopupHover: 'popup__button-add_hover',
  inputInvalid: 'popup__input_invalid'
}

enanleValidation(setting);

