export default class Section {
  constructor({result, renderer}, container) {
    this._items = result;
    this._renderer = renderer;
    this._container = document.querySelector(container);
  }

  renderList = () => {
    this._items.forEach((item) => this._container.append(this._renderer(item)));
  }

  addItem = (card) => {
    this._container.prepend(card);
  }
}