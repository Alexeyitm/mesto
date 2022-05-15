import { popupWithConfirm } from '../pages/index.js'

export default class Card {
  constructor(item, cardSelector, handleCardClick) {
    this._place = item.name;
    this._link = item.link;
    this._likes = item.likes;
    this._id = item._id;
    this._ownerId = item.owner._id;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
  };

  _getTemplate() {
    const cardElement = document.querySelector(this._cardSelector).content.querySelector('.element').cloneNode(true);
    return cardElement;
  }

  _setEventListeners = () => {
    this._heartButton = this._cardElement.querySelector('.element__svg-heart');
    this._deleteButton = this._cardElement.querySelector('.element__button-delete');
    this._pictureButton = this._cardElement.querySelector('.element__img');

    this._heartButton.addEventListener('click', () => this._toggleLike());
    this._deleteButton.addEventListener('click', () => this._deleteCard(this._id, this._cardElement));
    this._pictureButton.addEventListener('click', () => this._handleCardClick(this._place, this._link));

    return this._cardElement;
  };

  _toggleLike = () => {
    this._heartButton.classList.toggle('element__svg-heart_active');
  };

  _deleteCard = (id, card) => {
    popupWithConfirm.open(id, card);
  };

  _removeDeleteButton = () => {
    if (this._ownerId !== '2ed2c3d5abfc157f3efd6e43') {
      this._cardElement.querySelector('.element__button-delete').style.display = 'none';
      return this._cardElement
    }
  }

  generateCard = () => {
    this._cardElement = this._getTemplate();
    this._cardElement.querySelector('.element__figcaption').textContent = this._place;
    this._cardElement.querySelector('.element__img').alt = this._place;
    this._cardElement.querySelector('.element__img').src = this._link;
    this._cardElement.querySelector('.element__count').textContent = this._likes.length;
    
    this._removeDeleteButton();
    this._setEventListeners();
  
    return this._cardElement;
  };
};