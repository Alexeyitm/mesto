export default class FormValidator {
  constructor(validateSetting, formElement) {
    this._setting = validateSetting;
    this._formElement = formElement;
    this._inputList = Array.from(this._formElement.querySelectorAll(validateSetting.input));

    this._button = this._formElement.querySelector(validateSetting.buttonAddPopup);
  };

  enableValidation() {
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._handleFormInput(inputElement);
      });
    });
  };

  _handleFormInput(inputElement) {
    this._inputElement = inputElement;

  this._setCustomError();
  this._setFieldError();
  this.setSubmitButtonStateActive();
  this.setSubmitButtonStateDisabled();
  };


  _setCustomError() {
    if (!this._inputElement.validity.valid) {
      this._inputElement.classList.add(this._setting.inputInvalid);
    }
    else {
      this._inputElement.classList.remove(this._setting.inputInvalid);
    }
  };

  _setFieldError() {
    this._span = document.querySelector(`#${this._inputElement.id}-error`);
    this._span.textContent = this._inputElement.validationMessage;
  };

  setSubmitButtonStateActive() {
    if (this._formElement.checkValidity()) {
      this._button.classList.remove(this._setting.buttonAddPopupInvalid);
      this._button.removeAttribute('disabled');
    }
  };

  setSubmitButtonStateDisabled() {
    if (!this._formElement.checkValidity()) {
      this._button.classList.add(this._setting.buttonAddPopupInvalid);
      this._button.setAttribute('disabled', 'disabled');
    }
  };

  resetErrors() {
    this._inputList.forEach((inputElement) => {
      this._resetInputError(inputElement);
    })
  }

  _resetInputError(input) {
    document.querySelector(`#${input.id}-error`).textContent = "";
    input.classList.remove(this._setting.inputInvalid);
  }
};