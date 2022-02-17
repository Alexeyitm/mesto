let buttonEdit = document.querySelector('.profile__button-edit');
let buttonClose = document.querySelector('.popup__button-close');
let buttonHearts = document.querySelectorAll('.element__svg-heart');
let buttonAdd = document.querySelector('.popup__button-add');
let name = document.querySelector('.profile__name');
let text = document.querySelector('.profile__text');
let inputs = document.querySelectorAll('.popup__input');
let popup = document.querySelector('.popup');

buttonEdit.addEventListener('click', function () {
  popup.classList.remove('popup_opened');
});

buttonClose.addEventListener('click', function () {
  popup.classList.add('popup_opened');
});

buttonAdd.addEventListener('click', function () {
  let name = document.querySelector('.profile__name');
  let text = document.querySelector('.profile__text');
  const inputs = document.querySelectorAll('.popup__input');
  name.textContent = inputs[0].value;
  text.textContent = inputs[1].value;
  popup.classList.add('popup_opened');
});

for (let buttonHeart of buttonHearts) {
  buttonHeart.addEventListener('click', function () {
    buttonHeart.setAttribute('style','background-image: url(./image/Vector-heart-black.svg);');
    buttonHeart.classList.remove('element__svg-heart_hover');
  });
}





