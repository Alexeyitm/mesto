import { initialCards, validateSetting, popupUser, popupCard, popupImage, buttonEdit, buttonAdd, buttonClosePicture, 
  formElementEdit, formElementAdd, nameElement, textElement, nameInput, jobInput, placeInput, linkInput, cardsContainer
} from './utils/constants.js';
import { FormValidator } from './components/FormValidator.js';
import { Section } from './components/Section.js';
import { Popup } from './components/Popup.js';
import { renderer } from './utils/utils.js';

const formEdit = new FormValidator(validateSetting, formElementEdit);
const formAdd = new FormValidator(validateSetting, formElementAdd);

const popupEdit = new Popup(popupUser);
const popupAdd = new Popup(popupCard);
// functions
// open popup
//const openPopup = (element) => {
  //document.addEventListener('keydown', closeByEsc);
//  element.classList.add('popup_opened');
//};

// close popup
//const closePopup = (element) => {
  //document.removeEventListener('keydown', closeByEsc);
//  element.classList.remove('popup_opened'); 
//};

// press overlay
//const pressOverlay = (popup) => {
//  closePopup(popup);
//};

// press Esc
//const closeByEsc = (evt) => {
//  if (evt.key === 'Escape') {
//    const openedPopup = document.querySelector('.popup_opened');
//    closePopup(openedPopup); 
//  };
//};

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
  const values = {name: placeInput.value, link: linkInput.value};
  const card = new Section({initialCards: values, renderer}, '.elements__list').renderList();
  cardsContainer.prepend(card)
  closePopup(popupCard);
  formElementAdd.reset();
  formAdd.setSubmitButtonStateDisabled();
};

// listeners
// popupUser open listener
buttonEdit.addEventListener('click', () => {
  nameInput.value = nameElement.textContent;
  jobInput.value = textElement.textContent;
  popupEdit.open();
  formEdit.resetErrors();
});

// popupUser overlay close listener
//popupUser.addEventListener('click', () => {
//  pressOverlay(popupUser);    
//});
//popupContainerUser.addEventListener('click', (evt) => {
//  evt.stopPropagation();
//});

// popupUser close listener
//buttonCloseUser.addEventListener('click', () => {
//  popupEdit.close();
  //closePopup(popupUser);
//});

// popupCard open listener
buttonAdd.addEventListener('click', () => {
  formAdd.setSubmitButtonStateDisabled();
  popupAdd.open();
  formAdd.resetErrors();
});

// popupCard overlay close listener
//popupCard.addEventListener('click', () => {
//  pressOverlay(popupCard);    
//});
//popupContainerCard.addEventListener('click', (evt) => {
//  evt.stopPropagation();
//});

// popupCard close listener
//buttonCloseCard.addEventListener('click', () => {
//  popupAdd.close();
//});

// picture overlay close listener
//popupImage.addEventListener('click', () => {
//  pressOverlay(popupImage);    
//});
//popupFigure.addEventListener('click', (evt) => {
//  evt.stopPropagation();
//});

// picture close listener
buttonClosePicture.addEventListener('click', () => {
  closePopup(popupImage);
});

// submit form PopupUser listener
formElementEdit.addEventListener('submit', submitPopupEdit);

// submit form PopupCard listener
formElementAdd.addEventListener('submit', submitPopupCard);

// validate cards
formEdit.enableValidation();
formAdd.enableValidation();


// add start cards
for (let i = 0; i < initialCards.length; i++) {
  const card = new Section({initialCards: initialCards[i], renderer}, '.elements__list').addItem();
};