export default class Section {
  constructor({initialCards, renderer}, container) {
    this._items = initialCards;
    this._renderer = renderer;
    this._container = document.querySelector(container);
  }

  renderList = () => {
    this._items.forEach((item) => this._container.prepend(this._renderer(item)));
  }

  addItem = (card) => {
    this._container.prepend(card);
  }
}