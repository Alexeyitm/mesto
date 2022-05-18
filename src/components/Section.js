import { newCard } from '../pages/index.js'
import { popupWithFormAdd } from '../pages/index.js'
import { buttonSubmitPopupAdd } from '../utils/constants.js'

export default class Section {
  constructor({renderer}, container, api) {
    this._renderer = renderer;
    this._container = document.querySelector(container);
    this._api = api;
  }

  renderItems = (items) => {
    items.forEach((item) => {
      this._container.append(this._renderer(item))});
  }

  addItem = (item) => {
    this._api.setCard(item)
      .then(res => {
        this._container.prepend(newCard(res));
        popupWithFormAdd.close();
      })
      .catch(err => console.log(err))
      .finally(setTimeout(function() {buttonSubmitPopupAdd.textContent = 'Сохранить'}, 1000));
  }
}