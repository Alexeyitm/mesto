export class FormValidator {
  constructor(obj, formElement) {
    this._obj = obj;
    this._formElement = formElement;
    this._inputList = Array.from(this._formElement.querySelectorAll(obj.input));
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
  this._setSubmitButtonState();
  };


  _setCustomError() {
    if (!this._inputElement.validity.valid) {
      this._inputElement.classList.add(this._obj.inputInvalid);
    }
    else {
      this._inputElement.classList.remove(this._obj.inputInvalid);
    }
  };

  _setFieldError() {
    this._span = document.querySelector(`#${this._inputElement.id}-error`);
    this._span.textContent = this._inputElement.validationMessage;
  };

  _setSubmitButtonState() {
    this._button = this._formElement.querySelector(this._obj.buttonAddPopup);
    this._isValid = this._formElement.checkValidity();
  
    if (this._isValid) {
      this._button.classList.remove(this._obj.buttonAddPopupInvalid);
      this._button.classList.add(this._obj.buttonAddPopupHover);
      this._button.removeAttribute('disabled');
    }
    else {
      this._button.classList.add(this._obj.buttonAddPopupInvalid);
      this._button.classList.remove(this._obj.buttonAddPopupHover);
      this._button.setAttribute('disabled', 'disabled');
    }
  };
};