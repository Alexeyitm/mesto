import { popupWithConfirm } from '../pages/index.js'
import { api, newValues } from '../pages/index.js';

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
    this._cardElement = this._getTemplate();
    this._cardFigcaption = this._cardElement.querySelector('.element__figcaption');
    this._cardImg = this._cardElement.querySelector('.element__img');
    this._cardCountLikes = this._cardElement.querySelector('.element__count');
    this._heartButton = this._cardElement.querySelector('.element__svg-heart');
    this._deleteButton = this._cardElement.querySelector('.element__button-delete');
    this._pictureButton = this._cardElement.querySelector('.element__img');

    this._heartButton.addEventListener('click', () => this._toggleLike());
    this._deleteButton.addEventListener('click', () => this._openPopupWithConfirm(this._id, this._cardElement));
    this._pictureButton.addEventListener('click', () => this._handleCardClick(this._place, this._link));

    return this._cardElement;
  };

  _toggleLike = () => {
    this._countLike = this._cardElement.querySelector('.element__count');
    this._response = function (res) {{
      this._countLike.textContent = res.likes.length;
    }}

    if(!this._heartButton.classList.contains('element__svg-heart_active')) {
      api.addLike(this._id)
        .then(res => {
          this._response(res);
          this._heartButton.classList.add('element__svg-heart_active');
        })
        .catch(err => console.log(err));
    }
    else {
      api.deleteLike(this._id)
        .then(res => {
          this._response(res);
          this._heartButton.classList.remove('element__svg-heart_active');
        })
        .catch(err => console.log(err));
    }
  };

  _openPopupWithConfirm = (id, card) => {
    popupWithConfirm.open(id, card);
  };

  _removeDeleteButton = () => {
    if (this._ownerId !== newValues.getUserId()) {
      this._deleteButton.style.display = 'none';
    }
  }

  _activeLike = () => {
    this._likes.forEach((user) => {
      if (user._id == newValues.getUserId()) {
        this._heartButton.classList.add('element__svg-heart_active');
      }
    })
  }

  generateCard = () => {
    this._setEventListeners();
    this._removeDeleteButton();
    this._activeLike();

    this._cardFigcaption.textContent = this._place;
    this._cardImg.alt = this._place;
    this._cardImg.src = this._link;
    this._cardCountLikes.textContent = this._likes.length;

    return this._cardElement;
  };
};