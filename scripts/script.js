// open and close popup-edit
const editButton = document.querySelector('.profile__button-edit');
const closeButton = document.querySelector('.popup__button-close');
const popupTitle = document.querySelector('.popup__title');
const popupElement = document.querySelector('.popup');

editButton.addEventListener('click', function () {
  popupElement.classList.add('popup_opened');
  nameInput.value = nameElement.textContent;
  jobInput.value = textElement.textContent;
});

closeButton.addEventListener('click', function () {
  popupElement.classList.remove('popup_opened');
});


// change name and text
const nameElement = document.querySelector('.profile__name');
const textElement = document.querySelector('.profile__text');
const nameInput = document.querySelector('.popup__input_field_name');
const jobInput = document.querySelector('.popup__input_field_job');
const formElement = document.querySelector('.popup__form');

const formSubmitHandler = (evt) => {
  evt.preventDefault();
  nameElement.textContent = nameInput.value;
  textElement.textContent = jobInput.value;
  popupElement.classList.remove('popup_opened');
};
formElement.addEventListener('submit', formSubmitHandler);


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
const cardTemplate = document.querySelector('.element-template').content;
const cardList = document.querySelector('.elements__list');

const createCards = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
    cardElement.querySelector('.element__img').src = initialCards[i].link;
    cardElement.querySelector('.element__img').alt = initialCards[i].name;
    cardElement.querySelector('.element__figcaption').textContent = initialCards[i].name;
    cardList.append(cardElement);
  }
}
createCards(initialCards);


//add new card
const formSubmitHandlerAdd = (evt) => {
  evt.preventDefault();
  initialCards.push({name: popupAddElement.querySelector('.popup__input_field_name').value, link: popupAddElement.querySelector('.popup__input_field_job').value});

  const newCardElement = cardTemplate.querySelector('.element').cloneNode(true);
  newCardElement.querySelector('.element__img').src = initialCards[initialCards.length - 1].link;
  newCardElement.querySelector('.element__img').alt = initialCards[initialCards.length - 1].name;
  newCardElement.querySelector('.element__figcaption').textContent = initialCards[initialCards.length - 1].name;
  cardList.prepend(newCardElement);
  popupAddElement.classList.remove('popup_opened');

  //add "like" for new card
  newCardElement.querySelector('.element__svg-heart').addEventListener('click', function () {
    newCardElement.querySelector('.element__svg-heart').classList.toggle('element__svg-heart_active');
  });
  //add "delete" for new card
  newCardElement.querySelector('.element__button-delete').addEventListener('click', function () {
    newCardElement.querySelector('.element__button-delete').closest('.element').remove();
  });
};
popupAddElement.querySelector('.popup__form').addEventListener('submit', formSubmitHandlerAdd);


// add "likes"
const heartsButton = document.querySelectorAll('.element__svg-heart');
for (let heart of heartsButton) {
  heart.addEventListener('click', function () {
  heart.classList.toggle('element__svg-heart_active');
  });
};


// delete card
const deleteButton = document.querySelectorAll('.element__button-delete');
for (let item of deleteButton) {
  item.addEventListener('click', function () {
  item.closest('.element').remove()
  }); 
};





