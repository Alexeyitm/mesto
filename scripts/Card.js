export class Card {
  constructor(place, link, card, toggleLike, deleteCard, openPopup) {
    this._place = place;
    this._link = link;
    this._cardTemplate = document.querySelector(card).content;
    this._cardElement = this._cardTemplate.querySelector('.element').cloneNode(true);

    this._heartButton = this._cardElement.querySelector('.element__svg-heart');
    this._deleteButton = this._cardElement.querySelector('.element__button-delete');
    this._pictureButton = this._cardElement.querySelector('.element__img');

    this._toggleLike = toggleLike;
    this._deleteCard = deleteCard;
    this._openPopup = openPopup;
  };

  _addContent() {
    this._cardElement.querySelector('.element__img').src = this._link;
    this._cardElement.querySelector('.element__img').alt = this._place;
    this._cardElement.querySelector('.element__figcaption').textContent = this._place;
  };

  _setEventListeners() {
    // like listener
    this._heartButton.addEventListener('click', () => this._toggleLike(this._heartButton));
    // delete listener
    this._deleteButton.addEventListener('click', () => this._deleteCard(this._deleteButton));
    // popup picture listener
    this._pictureButton.addEventListener('click', () => {
      document.querySelector('.popup__picture').src = this._link;
      document.querySelector('.popup__picture').alt = this._place;
      document.querySelector('.popup__figcaption').textContent = this._place;

      this._openPopup(document.querySelector('.popup_image'))
    });

    return this._cardElement;
  };

  generateCard() {
    this._element = this._cardElement;
    this._addContent();
    this._setEventListeners();
  
    return this._element;
  };
};