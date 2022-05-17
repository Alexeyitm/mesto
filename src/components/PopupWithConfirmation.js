import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popup, submitPopup) {
    super(popup);
    this._submitPopup = submitPopup;
    this._form = this._popup.querySelector('.popup__form');
  }

  open(id, card) {
    super.open();

    this._id = id;
    this._card = card;
  }


  setEventListeners = () => {
    super.setEventListeners();

    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitPopup(this._id, this._card);
    });
  }
}