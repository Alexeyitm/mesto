// select buttons, elements, inputs and form
let editButton = document.querySelector('.profile__button-edit');
let closeButton = document.querySelector('.popup__button-close');
let heartsButton = document.querySelectorAll('.element__svg-heart');
let buttonAdd = document.querySelector('.popup__button-add');
let popupElement = document.querySelector('.popup');
let nameElement = document.querySelector('.profile__name');
let textElement = document.querySelector('.profile__text');
let nameInput = document.querySelector('.popup__input-name');
let jobInput = document.querySelector('.popup__input-job');
let formElement = document.querySelector('.popup__form');

console.log(heartsButton)

// open popup
editButton.addEventListener('click', function () {
  popupElement.classList.add('popup_opened');
  nameInput.value = nameElement.textContent;
  jobInput.value = textElement.textContent;
});

// close popup
closeButton.addEventListener('click', function () {
  popupElement.classList.remove('popup_opened');
});

// change name and text
function formSubmitHandler (evt) {
  evt.preventDefault();
  nameElement.textContent = nameInput.value;
  textElement.textContent = jobInput.value;
  popupElement.classList.remove('popup_opened');
};

formElement.addEventListener('submit', formSubmitHandler)

// add "likes"
for (let heart of heartsButton) {
  heart.addEventListener('click', function () {
    heart.setAttribute('style', 'background-image: url(./image/Vector-heart-black.svg)');
    heart.classList.remove('element__svg-heart_hover');
  });
}





