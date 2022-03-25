function enanleValidation() {
  const form = document.querySelector('.popup__form_edit');
  
  form.addEventListener('input', handleFormInput);
}

function handleFormInput(event) {
  const form = event.currentTarget;
  const input = event.target;

  setCustomError(input);
  setFieldError(input);
}

function setCustomError(input) {
  const validity = input.validity;
  const currentLength = input.value.length;

  input.setCustomValidity('')

  if (currentLength == 0) {
    input.setCustomValidity('Вы пропустили это поле.')
  }

  if (validity.tooShort || validity.tooLong) {
    const min = input.getAttribute('minlength');
    input.setCustomValidity(`Минимальное количество символов: ${min}. Длина текста сейчас: ${currentLength} символ.`);
  }
}

function setFieldError(input) {
  const span = document.querySelector(`#${input.id}-error`);
  span.textContent = input.validationMessage;
}



enanleValidation()