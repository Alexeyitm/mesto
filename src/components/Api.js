import { nameInput, jobInput, avatarInput, nameElement, textElement, profileAvatar } from '../utils/constants.js';

export default class Api {
  constructor(cohort, token) {
    this._cohort = cohort;
    this._token = token;
  }
  
  getUser() {
    this._request = fetch(`https://mesto.nomoreparties.co/v1/${this._cohort}/users/me`, {
      method: 'GET',
      headers: {
        authorization: `${this._token}`
      }
    })
    .then(res => res.json())
    .then(get => {
      nameElement.textContent = get.name;
      textElement.textContent = get.about;
      profileAvatar.src = get.avatar;
      profileAvatar.alt = get.name;
    });
  }

  //getCards() {
  //  return fetch(`https://mesto.nomoreparties.co/v1/${this._cohort}/cards`, {
  //    method: 'GET',
  //    headers: {
  //      authorization: `${this._token}`
  //    }
  //  })
  //  .then(res => {
  //    return res.json();
  //  })
  //}

  setUser() {
    fetch(`https://mesto.nomoreparties.co/v1/${this._cohort}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: `${this._token}`,
          'Content-Type': 'application/json'
        },
      body: JSON.stringify({
        name: nameInput.value,
        about: jobInput.value
      })
    })
    this.getUser();
  }

  setAvatar() {
    fetch(`https://mesto.nomoreparties.co/v1/${this._cohort}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        authorization: `${this._token}`,
          'Content-Type': 'application/json'
        },
      body: JSON.stringify({
        avatar: avatarInput.value
      })
    })
    this.getUser();
  }


}