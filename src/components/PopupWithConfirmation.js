import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popup, submitPopup) {
    super(popup);
    this._submitPopup = submitPopup;
  }

  setEventListeners = () => {
    super.setEventListeners();

    this._popup.querySelector('.popup__form').addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitPopup();
    });
  }
}