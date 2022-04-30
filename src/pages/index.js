import './index.css';

import { initialCards, validateSetting, popupUser, popupCard, popupImage, buttonEdit,
  nameElement, textElement, buttonAdd, formElementEdit, formElementAdd} from '../utils/constants.js';
import { renderer, submitPopupEdit, submitPopupAdd } from '../utils/utils.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from "../components/PopupWithImage.js"
import PopupWithForm from "../components/PopupWithForm.js"
import UserInfo from "../components/UserInfo.js"

const formEdit = new FormValidator(validateSetting, formElementEdit);
const formAdd = new FormValidator(validateSetting, formElementAdd);
export const popupWithPicture = new PopupWithImage(popupImage);
const popupWithFormEdit = new PopupWithForm(popupUser, submitPopupEdit);
const popupWithFormAdd = new PopupWithForm(popupCard, submitPopupAdd);

// listeners
// popupUser open listener
buttonEdit.addEventListener('click', () => {
  new UserInfo({name: nameElement.textContent, job: textElement.textContent}).setUserInfo();
  popupWithFormEdit.open();
  formEdit.resetErrors();
});

// popupCard open listener
buttonAdd.addEventListener('click', () => {
  formAdd.setSubmitButtonStateDisabled();
  popupWithFormAdd.open();
  formAdd.resetErrors();
});

// validate cards
formEdit.enableValidation();
formAdd.enableValidation();

// add start cards
for (let i = 0; i < initialCards.length; i++) {
  const card = new Section({initialCards: initialCards[i], renderer}, '.elements__list').addItem();
};