// select constants
// popups
const popupUser = document.querySelector('.popup_user');
const popupCard = document.querySelector('.popup_card');
const popupImage = document.querySelector('.popup_image');
const popupContainerUser = document.querySelector('.popup__container_user');
const popupContainerCard = document.querySelector('.popup__container_card');
const popupFigure = document.querySelector('.popup__figure');

// buttons
const buttonEdit = document.querySelector('.profile__button-edit');
const buttonAdd = document.querySelector('.profile__button-add');
const buttonCloseUser = popupUser.querySelector('.popup__button-close');
const buttonCloseCard = popupCard.querySelector('.popup__button-close');
const buttonClosePicture = popupImage.querySelector('.popup__button-close');
const buttonAddCard = popupCard.querySelector('.popup__button-add_card');

//inputs and elements
const formElementEdit = document.querySelector('.popup__form_edit');
const formElementAdd = document.querySelector('.popup__form_add');
const nameElement = document.querySelector('.profile__name');
const textElement = document.querySelector('.profile__text');
const nameInput = document.querySelector('.popup__input_field_name');
const jobInput = document.querySelector('.popup__input_field_job');
const placeInput = document.querySelector('.popup__input_field_place');
const linkInput = document.querySelector('.popup__input_field_link');
const cardsContainer = document.querySelector('.elements__list');
const picturePopup = document.querySelector('.popup__picture');
const figcaptionPopup = document.querySelector('.popup__figcaption');
const popupList = document.querySelectorAll('.popup');



// functions
// open popup
const openPopup = (element) => {
  document.addEventListener('keydown', closeByEsc);
  element.classList.add('popup_opened');
};

// close popup
const closePopup = (element) => {
  document.removeEventListener('keydown', closeByEsc);
  element.classList.remove('popup_opened');
};

// press overlay
const pressOverlay = (popup) => {
  closePopup(popup);
};

// press Esc
const closeByEsc = (evt) => {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup); 
  };
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
  const cardElementImg = cardElement.querySelector('.element__img');
  const cardElementFigcaption = cardElement.querySelector('.element__figcaption');
  // add content
  cardElementImg.src = link;
  cardElementImg.alt = place;
  cardElementFigcaption.textContent = place;
  // add like
  const heartButton = cardElement.querySelector('.element__svg-heart');
  heartButton.addEventListener('click', function () {
    toggleLike(heartButton);
  });
  // add delete
  const deleteButton = cardElement.querySelector('.element__button-delete');
  deleteButton.addEventListener('click', function () {
    deleteCard(deleteButton);
  });
  // open picture
  const openPicture = cardElement.querySelector('.element__img');
  openPicture.addEventListener('click', function () {
    picturePopup.src = link;
    picturePopup.alt = place;
    figcaptionPopup.textContent = place;
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
  cardsContainer.prepend(newCard);
  closePopup(popupCard);
  buttonAddCard.classList.remove('popup__button-add_hover');
  formElementAdd.reset();
};



// listeners
// popupUser open listener
buttonEdit.addEventListener('click', function () {
  nameInput.value = nameElement.textContent;
  jobInput.value = textElement.textContent;  
  openPopup(popupUser);
});

// popupUser overlay close listener
popupUser.addEventListener('click', function () {
  pressOverlay(popupUser);    
});
popupContainerUser.addEventListener('click', function(evt) {
  evt.stopPropagation();
});

// popupUser close listener
buttonCloseUser.addEventListener('click', function () {
  closePopup(popupUser);
});

// popupCard open listener
buttonAdd.addEventListener('click', function () {
  buttonAddCard.setAttribute('disabled', 'disabled');
  buttonAddCard.classList.add('popup__button-add_invalid');
  openPopup(popupCard);
});

// popupCard overlay close listener
popupCard.addEventListener('click', function () {
  pressOverlay(popupCard);    
});
popupContainerCard.addEventListener('click', function(evt) {
  evt.stopPropagation();
});

// popupCard close listener
buttonCloseCard.addEventListener('click', function () {
  closePopup(popupCard);
});

// picture overlay close listener
popupImage.addEventListener('click', function () {
  pressOverlay(popupImage);    
});
popupFigure.addEventListener('click', function(evt) {
  evt.stopPropagation();
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
  cardsContainer.append(elementArr);
};
