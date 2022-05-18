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
  setUser(inputs) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: inputs.Name,
        about: inputs.Job
      })
    })
    .then(res => this._getJSON(res))
  }

  //устанавливаем новую карточку
  setCard(item) {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: item.Place,
        link: item.Link,
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
  setAvatar(input) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: input.Link
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