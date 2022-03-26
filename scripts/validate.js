function enanleValidation(obj) {
  const formEdit = document.querySelector(obj.formEdit);
  const formAdd = document.querySelector(obj.formAdd);

  formEdit.addEventListener('input', handleFormInput);
  formAdd.addEventListener('input', handleFormInput);
}


function handleFormInput(evt) {
  const form = evt.currentTarget;
  const input = evt.target;

  setCustomError(input);
  setFieldError(input);
  setSubmitButtonState(form);
}

function setCustomError(input) {
  const validity = input.validity;
  const currentLength = input.value.length;

  input.setCustomValidity('');
  input.classList.remove('popup__input_invalid');

  if (currentLength == 0) {
    input.setCustomValidity('Вы пропустили это поле.');
    input.classList.add('popup__input_invalid');
  }

  if (validity.tooShort || validity.tooLong) {
    const min = input.getAttribute('minlength');
    input.setCustomValidity(`Минимальное количество символов: ${min}. Длина текста сейчас: ${currentLength} символ.`);
    input.classList.add('popup__input_invalid');
  }

  if (validity.typeMismatch) {
    input.setCustomValidity(`Введите адрес сайта`);
    input.classList.add('popup__input_invalid');
  }
}

function setFieldError(input) {
  const span = document.querySelector(`#${input.id}-error`);
  span.textContent = input.validationMessage;
}

function setSubmitButtonState(form) {
  const button = form.querySelector('.popup__button-add');
  isValid = form.checkValidity();

  if (isValid) {
    button.classList.remove('popup__button-add_invalid');
    button.classList.add('popup__button-add_hover');
    button.removeAttribute('disabled');
  }
  else {
    button.classList.add('popup__button-add_invalid');
    button.classList.remove('popup__button-add_hover');
    button.setAttribute('disabled', 'disabled');
  }
}


enanleValidation({
  formEdit: '.popup__form_edit',
  formAdd: '.popup__form_add'
});