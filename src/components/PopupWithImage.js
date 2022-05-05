import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popup) {
    super(popup);
    this._popupPicture = this._popup.querySelector('.popup__picture');
    this._popupFigcaption = this._popup.querySelector('.popup__figcaption');
  }

  open(place, link) {
    this._popupPicture.src = link;
    this._popupPicture.alt = place;
    this._popupFigcaption.textContent = place;
    super.open();
  }
}