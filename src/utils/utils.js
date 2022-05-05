import { popupUser, popupCard, nameElement, textElement, placeInput, linkInput, cardsContainer } from './constants.js';
import { popupWithPicture, card } from '.././pages/index.js';
import Card from '../components/Card.js';

export const renderer = (item) => {
  const newCard = new Card(item.name, item.link, '.element-template', handleCardClick).generateCard();
  return newCard;
};

const handleCardClick = (place, link) => {
  popupWithPicture.open(place, link);
};

export const submitPopupEdit = (formInputValues) => {
  nameElement.textContent = formInputValues.Name;
  textElement.textContent = formInputValues.Job;
  popupUser.classList.remove('popup_opened');
};

export const submitPopupAdd = () => {
  const newCard = new Card(placeInput.value, linkInput.value, '.element-template', handleCardClick).generateCard();
  card.addItem(newCard);
  popupCard.classList.remove('popup_opened');
};