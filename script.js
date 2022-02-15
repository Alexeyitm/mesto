let buttonEdit = document.querySelector('.profile__button-edit');
let buttonClose = document.querySelector('.popup__button-close');
let buttonHearts = document.querySelectorAll('.element__svg-heart');
let popup = document.querySelector('.popup');

buttonEdit.addEventListener('click', function () {
  popup.classList.remove('popup_opened')
});

buttonClose.addEventListener('click', function () {
  popup.classList.add('popup_opened')
});

for (let buttonHeart of buttonHearts) {
  buttonHeart.addEventListener('click', function () {
    buttonHeart.setAttribute('style','background-image: url(./image/Vector-heart-black.svg);')
    buttonHeart.classList.remove('element__svg-heart_hover')
  });
}






