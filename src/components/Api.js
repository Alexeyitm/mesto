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
  getUser(values) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: this._headers
    })
    .then(res => this._getJSON(res))
    .then(get => {
      values.name.textContent = get.name;
      values.text.textContent = get.about;
      values.avatar.src = get.avatar;
      values.avatar.alt = get.name;
    });
  }

  //получаем массив карточек
  getCards() {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'GET',
      headers: this._headers
    })
    .then(res => this._getJSON(res))
  }
  

  //отправляем имя и описание
  setUser(user) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: user.name.value,
        about: user.job.value
      })
    })
    .then(res => this._getJSON(res));
  }

  //отправляем новую карточку
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
    .catch(err => console.log(err))
  }

  //удаляем карточку
  deleteCard(id) {
    return fetch(`${this._baseUrl}/cards/${id}`, {
      method: 'DELETE',
      headers: this._headers
    })
  }

  //отправляем новый аватар
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
}