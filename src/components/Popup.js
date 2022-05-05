export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
    this._popup = document.querySelector(this._popupSelector);
    this._buttonCloseUser = this._popup.querySelector('.popup__button-close');
  }

  open() {
    document.addEventListener('keydown', (evt) => this._handleEscClose(evt));
    this._popup.classList.add('popup_opened');
  }

  close() {
    document.removeEventListener('keydown', (evt) => this._handleEscClose(evt));
    this._popup.classList.remove('popup_opened');
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this._popup.classList.remove('popup_opened');
    };
  }

  setEventListeners() {
    this._buttonCloseUser.addEventListener('click', () => {
      this.close();
    });

    this._popup.addEventListener('click', (evt) => {
      if (evt.target === evt.currentTarget) {
        this.close();
      }
    }); 
  }
}


