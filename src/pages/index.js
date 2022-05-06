import './index.css';

import { initialCards, validateSetting, buttonEdit, buttonAdd, formElementEdit, 
  formElementAdd, nameElement, textElement, placeInput, linkInput} from '../utils/constants.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from "../components/PopupWithImage.js"
import PopupWithForm from "../components/PopupWithForm.js"
import UserInfo from "../components/UserInfo.js"


function newCard(name, link) {
  const card = new Card(name, link, '.element-template', () => {
    popupWithPicture.open(name, link);
  }); 
  return card.generateCard();  
}

const renderer = (item) => {
  return newCard(item.name, item.link);
};

const submitPopupEdit = (formInputValues) => {
  nameElement.textContent = formInputValues.Name;
  textElement.textContent = formInputValues.Job;
  popupWithFormEdit.close();
};

const submitPopupAdd = () => {
  section.addItem(newCard(placeInput.value, linkInput.value));
  popupWithFormAdd.close();
};


const popupWithPicture = new PopupWithImage('.popup_image');
const popupWithFormEdit = new PopupWithForm('.popup_user', submitPopupEdit);
const popupWithFormAdd = new PopupWithForm('.popup_card', submitPopupAdd);
const section = new Section({initialCards, renderer}, '.elements__list');
const formEdit = new FormValidator(validateSetting, formElementEdit);
const formAdd = new FormValidator(validateSetting, formElementAdd);

popupWithPicture.setEventListeners();
popupWithFormEdit.setEventListeners();
popupWithFormAdd.setEventListeners();
section.renderList();

formEdit.enableValidation();
formAdd.enableValidation();


// popupUser open listener
buttonEdit.addEventListener('click', () => {
  const newValues = new UserInfo({name: '.profile__name', job: '.profile__text'});
  newValues.setUserInfo(newValues.getUserInfo());
  popupWithFormEdit.open();
  formEdit.resetErrors();
});

// popupCard open listener
buttonAdd.addEventListener('click', () => {
  formAdd.setSubmitButtonStateDisabled();
  popupWithFormAdd.open();
  formAdd.resetErrors();
});