import { initialCards, validateSetting } from './contain.js';
import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';

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

const formEdit = new FormValidator(validateSetting, formElementEdit);
const formAdd = new FormValidator(validateSetting, formElementAdd);

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
  const CardElement = initialCard(placeInput.value, linkInput.value, '.element-template', openPopup);
  cardsContainer.prepend(CardElement);
  closePopup(popupCard);
  formElementAdd.reset();
  formAdd.setSubmitButtonStateDisabled();
};

// initialCard
const initialCard = (firstInputValue, secondInputValue, classTemplate, openPopup) => {
  const newCard = new Card(firstInputValue, secondInputValue, classTemplate, openPopup).generateCard();
  return newCard;
};

// listeners
// popupUser open listener
buttonEdit.addEventListener('click', () => {
  nameInput.value = nameElement.textContent;
  jobInput.value = textElement.textContent;  
  openPopup(popupUser);
  formEdit.resetErrors();
});

// popupUser overlay close listener
popupUser.addEventListener('click', () => {
  pressOverlay(popupUser);    
});
popupContainerUser.addEventListener('click', (evt) => {
  evt.stopPropagation();
});

// popupUser close listener
buttonCloseUser.addEventListener('click', () => {
  closePopup(popupUser);
});

// popupCard open listener
buttonAdd.addEventListener('click', () => {
  formAdd.setSubmitButtonStateDisabled();
  openPopup(popupCard);
  formAdd.resetErrors();
});

// popupCard overlay close listener
popupCard.addEventListener('click', () => {
  pressOverlay(popupCard);    
});
popupContainerCard.addEventListener('click', (evt) => {
  evt.stopPropagation();
});

// popupCard close listener
buttonCloseCard.addEventListener('click', () => {
  closePopup(popupCard);
});

// picture overlay close listener
popupImage.addEventListener('click', () => {
  pressOverlay(popupImage);    
});
popupFigure.addEventListener('click', (evt) => {
  evt.stopPropagation();
});

// picture close listener
buttonClosePicture.addEventListener('click', () => {
  closePopup(popupImage);
});

// submit form PopupUser listener
formElementEdit.addEventListener('submit', submitPopupEdit);

// submit form PopupCard listener
formElementAdd.addEventListener('submit', submitPopupCard);



// create cards from array initialCards
for (let i = 0; i < initialCards.length; i++) {
  const CardElement = initialCard(initialCards[i].name, initialCards[i].link, '.element-template', openPopup);
  cardsContainer.append(CardElement);
};

//validate cards
formEdit.enableValidation();
formAdd.enableValidation();