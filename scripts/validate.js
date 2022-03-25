function enanleValidation() {
  const formEdit = document.querySelector('.popup__form_edit');
  const formAdd = document.querySelector('.popup__form_add');

  formEdit.addEventListener('input', handleFormInput);
  formAdd.addEventListener('input', handleFormInput);
}


function handleFormInput(event) {
  const form = event.currentTarget;
  const input = event.target;

  setCustomError(input);
  setFieldError(input);
  setSubmitButtonState(form);
}

function setCustomError(input) {
  const validity = input.validity;
  const currentLength = input.value.length;

  input.setCustomValidity('');

  if (currentLength == 0) {
    input.setCustomValidity('Вы пропустили это поле.');
  }

  if (validity.tooShort || validity.tooLong) {
    const min = input.getAttribute('minlength');
    input.setCustomValidity(`Минимальное количество символов: ${min}. Длина текста сейчас: ${currentLength} символ.`);
  }

  if (validity.typeMismatch) {
    input.setCustomValidity(`Введите адрес сайта`);
  }
}

function setFieldError(input) {
  const span = document.querySelector(`#${input.id}-error`);
  span.textContent = input.validationMessage;
}

function setSubmitButtonState(form) {
  const button = form.querySelector('.popup__button-add');
  const isValid = form.checkValidity();

  if (isValid) {
    button.classList.remove('popup__button-add_invalid');
    button.removeAttribute('disabled');
  }
  else {
    button.classList.add('popup__button-add_invalid');
    button.setAttribute('disabled', 'disabled');
  }
}



enanleValidation();