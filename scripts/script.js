// select buttons
let buttonEdit = document.querySelector('.profile__button-edit');
let buttonClose = document.querySelector('.popup__button-close');
let buttonHearts = document.querySelectorAll('.element__svg-heart');
let buttonAdd = document.querySelector('.popup__button-add');

// select forms
let popup = document.querySelector('.popup');
let name = document.querySelector('.profile__name');
let text = document.querySelector('.profile__text');
let inputs = document.querySelectorAll('.popup__input');

// open popup
buttonEdit.addEventListener('click', function () {
  popup.classList.remove('popup_opened');
  inputs[0].setAttribute('value', name.textContent);
  inputs[1].setAttribute('value', text.textContent);
});

// close popup
buttonClose.addEventListener('click', function () {
  popup.classList.add('popup_opened');
});

// change name and text
buttonAdd.addEventListener('click', function () {
  name.textContent = inputs[0].value;
  text.textContent = inputs[1].value;
  popup.classList.add('popup_opened');
});

// add "likes"
for (let buttonHeart of buttonHearts) {
  buttonHeart.addEventListener('click', function () {
    buttonHeart.setAttribute('style', 'background-image: url(./image/Vector-heart-black.svg);');
    buttonHeart.classList.remove('element__svg-heart_hover');
  });
}





