import { nameInput, jobInput, avatarInput, placeInput, linkInput, nameElement, textElement, profileAvatar } from '../utils/constants.js';

export default class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }
  
  //получаем даные юзера
  getUser() {
    fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: this._headers
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .then(get => {
      nameElement.textContent = get.name;
      textElement.textContent = get.about;
      profileAvatar.src = get.avatar;
      profileAvatar.alt = get.name;
    });
  }

  //получаем массив карточек
  getCards() {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'GET',
      headers: this._headers
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
  }

  //отправляем имя и описание
  setUser() {
    fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: nameInput.value,
        about: jobInput.value
      })
    })
    nameElement.textContent = nameInput.value,
    textElement.textContent = jobInput.value,
    profileAvatar.alt = nameInput.value;
  }

  //отправляем новую карточку
  setCard() {
    fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: placeInput.value,
        link: linkInput.value
      })
    })
  }

  //удаляем карточку
  deleteCard(cardId) {
    fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers
    })
  }



  //отправляем новый аватар
  setAvatar() {
    fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: avatarInput.value
      })
    })
    profileAvatar.src = avatarInput.value;
  }


}