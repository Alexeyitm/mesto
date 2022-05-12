import { popupWithConfirm } from '../pages/index.js'

export default class Card {
  constructor(place, link, likes, cardSelector, handleCardClick) {
    this._place = place;
    this._link = link;
    this._likes = likes;
    this._place = place;
    this._link = link;
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
    this._deleteButton.addEventListener('click', () => this._deleteCard());
    this._pictureButton.addEventListener('click', () => this._handleCardClick(this._place, this._link));

    return this._cardElement;
  };

  _toggleLike = () => {
    this._heartButton.classList.toggle('element__svg-heart_active');
  };

  _deleteCard = () => {
    this._deleteButton.closest('.element').remove();
    popupWithConfirm.open();
  };

  generateCard = () => {
    this._cardElement = this._getTemplate();

    this._cardElement.querySelector('.element__figcaption').textContent = this._place;
    this._cardElement.querySelector('.element__img').alt = this._place;
    this._cardElement.querySelector('.element__img').src = this._link;
    this._cardElement.querySelector('.element__count').textContent = this._likes;
    
    this._setEventListeners();
  
    return this._cardElement;
  };
};