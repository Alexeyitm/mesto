let buttonEdit = document.querySelector('.profile__button-edit');
let buttonClose = document.querySelector('.popup__button-close');
let popup = document.querySelector('.popup');


buttonEdit.addEventListener('click', popupOpen);

function popupOpen() {
  popup.classList.remove('popup_opened')
  console.log(popup)
}

buttonClose.addEventListener('click', popupClose);

function popupClose() {
  popup.classList.add('popup_opened')
  console.log(popup)
}


