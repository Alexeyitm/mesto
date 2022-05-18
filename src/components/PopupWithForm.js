import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popup, submitPopup) {
    super(popup);
    this._inputList = this._popup.querySelectorAll('.popup__input');
    this._submitPopup = submitPopup;
    this._form = this._popup.querySelector('.popup__form');
  }

  getInputValues() {
    this._formInputValues = {};
    this._inputList.forEach((input) => this._formInputValues[input.name] = input.value);
    return this._formInputValues;
  }

  setEventListeners = () => {
    super.setEventListeners();

    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitPopup(this.getInputValues());
    });
  }

  close = () => {
    super.close();
    this._form.reset();
  }
}