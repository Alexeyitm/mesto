export class Section {
  constructor(obj, container) {
    this._items = obj.initialCards;
    this._renderer = obj.renderer;
    this._container = container;
  }

  renderList = () => {
    const card = this._renderer(this._items.name, this._items.link);
    return card;
  }

  addItem = () => {
      document.querySelector(this._container).append(this.renderList());
  }
}