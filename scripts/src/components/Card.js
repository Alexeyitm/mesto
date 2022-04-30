export default class Card {
  constructor(place, link, card, handleCardClick) {
    this._place = place;
    this._link = link;
    this._cardTemplate = card.content;
    this._cardElement = this._cardTemplate.querySelector('.element').cloneNode(true);
    this._heartButton = this._cardElement.querySelector('.element__svg-heart');
    this._deleteButton = this._cardElement.querySelector('.element__button-delete');
    this._pictureButton = this._cardElement.querySelector('.element__img');
    this._popupPicture = document.querySelector('.popup__picture');
    this._handleCardClick = handleCardClick;
  };

  _addContent = () => {
    this._pictureButton.src = this._link;
    this._pictureButton.src = this._link;
    this._cardElement.querySelector('.element__figcaption').textContent = this._place;
  };

  _setEventListeners = () => {
    // like listener
    this._heartButton.addEventListener('click', () => this._toggleLike());
    // delete listener
    this._deleteButton.addEventListener('click', () => this._deleteCard());
    // popup picture listener
    this._pictureButton.addEventListener('click', () => this._handleCardClick(this._place, this._link));

    return this._cardElement;
  };

  _toggleLike = () => {
    this._heartButton.classList.toggle('element__svg-heart_active');
  };

  _deleteCard = () => {
    this._deleteButton.closest('.element').remove();
  };

  generateCard = () => {
    this._element = this._cardElement;
    this._addContent();
    this._setEventListeners();
  
    return this._element;
  };
};