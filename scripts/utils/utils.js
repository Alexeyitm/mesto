import { Card } from '../components/Card.js';
import { templateElement } from './constants.js';

export const renderer = (firstInputValue, secondInputValue) => {
  const newCard = new Card(firstInputValue, secondInputValue, templateElement, openPopup).generateCard();
  return newCard;
};

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