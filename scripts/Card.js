export class Card {
  constructor(place, link, card) {
    this._place = place;
    this._link = link;
    this._cardTemplate = document.querySelector(card).content;
    this._cardElement = this._cardTemplate.querySelector('.element').cloneNode(true);
  };

  _addContent() {
    this._cardElement.querySelector('.element__img').src = this._link;
    this._cardElement.querySelector('.element__img').alt = this._place;
    this._cardElement.querySelector('.element__figcaption').textContent = this._place;

    return this._cardElement;
  };

  _setEventListeners() {
    // add like
    const heartButton = this._cardElement.querySelector('.element__svg-heart');
    heartButton.addEventListener('click', function () {
      toggleLike(heartButton);
    });
    // add delete
    const deleteButton = this._cardElement.querySelector('.element__button-delete');
    deleteButton.addEventListener('click', function () {
      deleteCard(deleteButton);
    });
    // open picture
    const openPicture = this._cardElement.querySelector('.element__img');
    openPicture.addEventListener('click', function () {
      picturePopup.src = link;
      picturePopup.alt = place;
      figcaptionPopup.textContent = place;
      openPopup(popupImage);
    });
  };

  generateCard() {
    this._element = this._cardElement;
    this._element = this._addContent();
    //this._element = this._setEventListeners();
  
    return this._element;
  };
};