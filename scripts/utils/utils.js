import { Card } from '../components/Card.js';
import { openPopup } from './../script.js';
import { templateElement } from './constants.js';

export const renderer = (firstInputValue, secondInputValue) => {
  const newCard = new Card(firstInputValue, secondInputValue, templateElement, openPopup).generateCard();
  return newCard;
};