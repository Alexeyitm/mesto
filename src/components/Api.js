export default class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;

    this._getJSON = function (res) {{
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    }}
  }
  
  //получаем даные пользователя
  getUser() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: this._headers
    })
    .then(res => this._getJSON(res))
  }

  //получаем массив карточек
  getCards() {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'GET',
      headers: this._headers
    })
    .then(res => this._getJSON(res))
  }
  

  //устанавливаем имя и описание
  setUser(user) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: user.name.value,
        about: user.job.value
      })
    })
    .then(res => this._getJSON(res))
  }

  //устанавливаем новую карточку
  setCard(card) {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: card.Place,
        link: card.Link,
      })
    })
    .then(res => this._getJSON(res))
  }

  //удаляем карточку
  deleteCard(id) {
    return fetch(`${this._baseUrl}/cards/${id}`, {
      method: 'DELETE',
      headers: this._headers
    })
    .then(res => this._getJSON(res))
  }

  //устанавливаем новый аватар
  setAvatar(src) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: src.value
      })
    })
    .then(res => this._getJSON(res))
  }

  //ставим лайк
  addLike(id) {
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
      method: 'PUT',
      headers: this._headers
    })
    .then(res => this._getJSON(res))
  }

  //убираем лайк
  deleteLike(id) {
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
      method: 'DELETE',
      headers: this._headers
    })
    .then(res => this._getJSON(res))
  }
}