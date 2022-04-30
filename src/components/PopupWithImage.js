import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popup) {
    super(popup);
    this._popup = popup;
  }

  open(place, link) {
    this._popup.querySelector('.popup__picture').alt = place;
    this._popup.querySelector('.popup__figcaption').textContent = place;
    this._popup.querySelector('.popup__picture').src = link;
    super.open();
  }
}