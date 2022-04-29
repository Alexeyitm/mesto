import Card from '../components/Card.js';
import Section from '../components/Section.js';
import { templateElement, nameElement, textElement, nameInput, jobInput, placeInput, linkInput, cardsContainer } from './constants.js';
import { popupWithPicture } from '../../../pages/index.js';


export const openPopup = (element) => {
  element.classList.add('popup_opened');
};

export const closePopup = (element) => {
  element.classList.remove('popup_opened'); 
};

export const closeByEsc = (evt) => {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup); 
  };
};

export const renderer = (firstInputValue, secondInputValue) => {
  const newCard = new Card(firstInputValue, secondInputValue, templateElement, handleCardClick).generateCard();
  return newCard;
};

const handleCardClick = (place, link) => {
  popupWithPicture.open(place, link);
};

export const submitPopupEdit = () => {
  nameElement.textContent = nameInput.value;
  textElement.textContent = jobInput.value;
};

export const submitPopupAdd = () => {
  const values = {name: placeInput.value, link: linkInput.value};
  const card = new Section({initialCards: values, renderer}, '.elements__list').renderList();
  cardsContainer.prepend(card);
};