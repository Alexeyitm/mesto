import { newCard } from '../pages/index.js'

export default class Section {
  constructor({result, renderer}, container, api) {
    this._items = result;
    this._renderer = renderer;
    this._container = document.querySelector(container);
    this._api = api;
  }

  renderList = () => {
    this._items.forEach((item) => {
      this._container.append(this._renderer(item))});
  }

  addItem = (inupts) => {
    this._api.setCard(inupts)
      .then(res => {
        this._container.prepend(newCard(res))
      })
      .catch(err => console.log(err))
  }
}