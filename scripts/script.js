// select constants
// popups
const popupUser = document.querySelector('.popup_user');
const popupCard = document.querySelector('.popup_card');
const popupImage = document.querySelector('.popup_image');
const allPopups = document.querySelectorAll('.popup');

// buttons
const buttonEdit = document.querySelector('.profile__button-edit');
const buttonAdd = document.querySelector('.profile__button-add');
const buttonCloseUser = popupUser.querySelector('.popup__button-close');
const buttonCloseCard = popupCard.querySelector('.popup__button-close');
const buttonClosePicture = popupImage.querySelector('.popup__button-close');

//inputs and elements
const formElementEdit = document.querySelector('.popup__form_edit');
const formElementAdd = document.querySelector('.popup__form_add');
const nameElement = document.querySelector('.profile__name');
const textElement = document.querySelector('.profile__text');
const nameInput = document.querySelector('.popup__input_field_name');
const jobInput = document.querySelector('.popup__input_field_job');
const placeInput = document.querySelector('.popup__input_field_place');
const linkInput = document.querySelector('.popup__input_field_link');
const cardList = document.querySelector('.elements__list');



// functions
// open popup
const openPopup = (element) => {
  element.classList.add('popup_opened');
};

// close popup
const closePopup = (element) => {
  element.classList.remove('popup_opened');
};

// toggle like
const toggleLike = (heart) => {
  heart.classList.toggle('element__svg-heart_active');
};

// delete card
const deleteCard = (del) => {
  del.closest('.element').remove();
};

// create card
const createCard = (place, link) => {
  // clone card
  const cardTemplate = document.querySelector('.element-template').content;
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  // add content
  cardElement.querySelector('.element__img').src = link;
  cardElement.querySelector('.element__img').alt = place;
  cardElement.querySelector('.element__figcaption').textContent = place;
  // add like
  const heartButton = cardElement.querySelector('.element__svg-heart');
  heartButton.addEventListener('click', function () {
    toggleLike(heartButton);
  });
  // add close
  const deleteButton = cardElement.querySelector('.element__button-delete');
  deleteButton.addEventListener('click', function () {
    deleteCard(deleteButton);
  });
  // open picture
  const openPicture = cardElement.querySelector('.element__img');
  openPicture.addEventListener('click', function () {
    popupImage.querySelector('.popup__picture').src = cardElement.querySelector('.element__img').src;
    popupImage.querySelector('.popup__picture').alt = cardElement.querySelector('.element__img').alt;
    popupImage.querySelector('.popup__figcaption').textContent = cardElement.querySelector('.element__img').alt;
    openPopup(popupImage);
  });

  return cardElement;
};

// submitPopupEdit
const submitPopupEdit = (evt) => {
  evt.preventDefault();
  nameElement.textContent = nameInput.value;
  textElement.textContent = jobInput.value;
  closePopup(popupUser);
};

// submitPopupCard
const submitPopupCard = (evt) => {
  evt.preventDefault();
  const newCard = createCard(placeInput.value, linkInput.value);
  cardList.prepend(newCard);
  formElementAdd.reset();
  closePopup(popupCard); 
};



// listeners
// popupUser open listener
buttonEdit.addEventListener('click', function () {
  nameInput.value = nameElement.textContent;
  jobInput.value = textElement.textContent;
  openPopup(popupUser);
});

// popupUser close listener
buttonCloseUser.addEventListener('click', function () {
  closePopup(popupUser);
});

// popupCard open listener
buttonAdd.addEventListener('click', function () {
  openPopup(popupCard);
});

// popupCard close listener
buttonCloseCard.addEventListener('click', function () {
  closePopup(popupCard);
});

// picture close listener
buttonClosePicture.addEventListener('click', function () {
  closePopup(popupImage);
});

// submit form PopupUser listener
formElementEdit.addEventListener('submit', submitPopupEdit);

// submit form PopupCard listener
formElementAdd.addEventListener('submit', submitPopupCard);



// cycles
// create cards from array initialCards
  for (let i = 0; i < initialCards.length; i++) {
    const elementArr = createCard(initialCards[i].name, initialCards[i].link);
    cardList.append(elementArr);
  }
