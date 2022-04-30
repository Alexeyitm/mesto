import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popup, submitPopup) {
    super(popup);
    this._popup = popup;
    this._submitPopup = submitPopup;
  }

  setEventListeners = () => {
    super.setEventListeners();
    this._popup.querySelector('.popup__form').addEventListener('submit', function(e) {e.preventDefault()});
    this._popup.querySelector('.popup__form').addEventListener('submit', this._submitPopup)
    this._popup.querySelector('.popup__form').addEventListener('submit', this.close);
  }

  close = () => {
    super.close();
    this._popup.querySelector('.popup__form').reset();
  }
}