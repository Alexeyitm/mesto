import './index.css';

import { initialCards, validateSetting, buttonEdit, buttonAvatar, buttonAdd, formElementAvatar, formElementEdit, 
  formElementAdd, placeInput, linkInput, avatarInput, profileAvatar} from '../utils/constants.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js'
import PopupWithForm from '../components/PopupWithForm.js'
import PopupWithConfirmation from '../components/PopupWithConfirmation';
import UserInfo from '../components/UserInfo.js'
import Api from '../components/Api';

const api = new Api('cohort-41', 'eed10f86-1fc3-40f4-979c-57d15047e1b5');
api.getUser();
//console.log(api.getCards())

function newCard(name, link) {
  const card = new Card(name, link, '.element-template', () => {
    popupWithPicture.open(name, link);
  }); 
  return card.generateCard();  
}

const renderer = (item) => {
  return newCard(item.name, item.link);
};

const submitPopupAvatar = () => {
  api.setAvatar();
  popupWithFormAvatar.close();
};

const submitPopupEdit = () => {
  api.setUser();
  popupWithFormEdit.close();
};

const submitPopupAdd = () => {
  section.addItem(newCard(placeInput.value, linkInput.value));
  popupWithFormAdd.close();
};

const submitPopupConfirm = () => {
  popupWithConfirm.close();
};



const popupWithPicture = new PopupWithImage('.popup_image');
const popupWithFormAvatar = new PopupWithForm('.popup_avatar', submitPopupAvatar);
const popupWithFormEdit = new PopupWithForm('.popup_user', submitPopupEdit);
const popupWithFormAdd = new PopupWithForm('.popup_card', submitPopupAdd);
export const popupWithConfirm = new PopupWithConfirmation('.popup_comfirm', submitPopupConfirm);
const section = new Section({initialCards, renderer}, '.elements__list');
const formAvatar = new FormValidator(validateSetting, formElementAvatar);
const formEdit = new FormValidator(validateSetting, formElementEdit);
const formAdd = new FormValidator(validateSetting, formElementAdd);

popupWithPicture.setEventListeners();
popupWithFormAvatar.setEventListeners();
popupWithFormEdit.setEventListeners();
popupWithFormAdd.setEventListeners();
popupWithConfirm.setEventListeners();
section.renderList();

formAvatar.enableValidation();
formEdit.enableValidation();
formAdd.enableValidation();


buttonAvatar.addEventListener('click', () => {
  popupWithFormAvatar.open();
  formEdit.resetErrors();
});

buttonEdit.addEventListener('click', () => {
  const newValues = new UserInfo({name: '.profile__name', job: '.profile__text'});
  newValues.setUserInfo(newValues.getUserInfo());
  popupWithFormEdit.open();
  formEdit.resetErrors();
});

buttonAdd.addEventListener('click', () => {
  formAdd.setSubmitButtonStateDisabled();
  popupWithFormAdd.open();
  formAdd.resetErrors();
});

