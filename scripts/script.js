// select buttons, elements, inputs and form
let popupElement = document.querySelector('.popup');
let nameElement = document.querySelector('.profile__name');
let textElement = document.querySelector('.profile__text');
let nameInput = document.querySelector('.popup__input_field_name');
let jobInput = document.querySelector('.popup__input_field_job');
let formElement = document.querySelector('.popup__form');


// open and close popup-edit
const editButton = document.querySelector('.profile__button-edit');
const closeButton = document.querySelector('.popup__button-close');
const popupTitle = document.querySelector('.popup__title');

editButton.addEventListener('click', function () {
  popupElement.classList.add('popup_opened');
  nameInput.value = nameElement.textContent;
  jobInput.value = textElement.textContent;
});

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


// create, open and close popup-add
const addButton = document.querySelector('.profile__button-add');
const popupAddElement = popupElement.cloneNode(true);
popupElement.after(popupAddElement);
popupAddElement.querySelector('.popup__title').textContent = 'Новое место'
popupAddElement.querySelector('.popup__input_field_name').placeholder = 'Название';
popupAddElement.querySelector('.popup__input_field_job').placeholder = 'Ссылка на картинку';

addButton.addEventListener('click', function () {
  popupAddElement.classList.add('popup_opened');
});

popupAddElement.querySelector('.popup__button-close').addEventListener('click', function () {
  popupAddElement.classList.remove('popup_opened');
});


// array cards
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]; 


// create cards
const createCards = () => {
  const cardTemplate = document.querySelector('.element-template').content;
  const cardList = document.querySelector('.elements__list');

  for (let i = 0; i < initialCards.length; i++) {
    const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
    cardElement.querySelector('.element__img').src = initialCards[i].link;
    cardElement.querySelector('.element__img').alt = initialCards[i].name;
    cardElement.querySelector('.element__figcaption').textContent = initialCards[i].name;
    cardList.append(cardElement); 
  }
}
createCards()


// add "likes"
let heartsButton = document.querySelectorAll('.element__svg-heart');
for (let heart of heartsButton) {
  heart.addEventListener('click', function () {
    heart.classList.toggle('element__svg-heart_active');
  });
}






