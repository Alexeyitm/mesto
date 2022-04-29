import { openPopup, closePopup, closeByEsc } from '../utils/utils.js';

export default class Popup {
  constructor(popup) {
    this._popup = popup;
  }

  open() {
    this._handleEscClose();
    this.setEventListeners();
    return openPopup(this._popup);
  }

  close() {
    closePopup(this._popup);
  }

  _handleEscClose = () => {
    document.addEventListener('keydown', closeByEsc);
  }

  setEventListeners() {
    const buttonCloseUser = this._popup.querySelector('.popup__button-close');
    buttonCloseUser.addEventListener('click', () => {
      this.close();
    });

    this._popup.addEventListener('click', () => {
      this.close();    
    });
    this._popup.querySelector('.container').addEventListener('click', (evt) => {
      evt.stopPropagation();
    });
  }
}


