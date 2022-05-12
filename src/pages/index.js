import './index.css';
import { validateSetting, buttonEdit, buttonAvatar, buttonAdd, formElementAvatar, formElementEdit, placeInput, linkInput,
  formElementAdd} from '../utils/constants.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js'
import PopupWithForm from '../components/PopupWithForm.js'
import PopupWithConfirmation from '../components/PopupWithConfirmation';
import UserInfo from '../components/UserInfo.js'
import Api from '../components/Api';


function newCard(name, link, likes) {
  const card = new Card(name, link, likes, '.element-template', () => {
    popupWithPicture.open(name, link);
  }); 
  return card.generateCard();  
}

const renderer = (item) => {
  return newCard(item.name, item.link, item.likes.length);
};

const submitPopupAvatar = () => {
  api.setAvatar();
  popupWithFormAvatar.close();
};

const submitPopupEdit = () => {
  api.setUser();
  popupWithFormEdit.close();
};

///////////////////////////////////////////////////////////////
const submitPopupAdd = () => {
  api.setCard();
  //section.addItem(newCard(placeInput.value, linkInput.value));
  document.querySelector('.elements__list').prepend(newCard(placeInput.value, linkInput.value));
  popupWithFormAdd.close();
};
///////////////////////////////////////////////////////////////

const submitPopupConfirm = () => {
  //this._deleteButton.closest('.element').remove();
  popupWithConfirm.close();
};


const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-41',
  headers: {
    authorization: 'eed10f86-1fc3-40f4-979c-57d15047e1b5',
    'Content-Type': 'application/json'
  }
}); 

const popupWithPicture = new PopupWithImage('.popup_image');
const popupWithFormAvatar = new PopupWithForm('.popup_avatar', submitPopupAvatar);
const popupWithFormEdit = new PopupWithForm('.popup_user', submitPopupEdit);
const popupWithFormAdd = new PopupWithForm('.popup_card', submitPopupAdd);
export const popupWithConfirm = new PopupWithConfirmation('.popup_comfirm', submitPopupConfirm);
const formAvatar = new FormValidator(validateSetting, formElementAvatar);
const formEdit = new FormValidator(validateSetting, formElementEdit);
const formAdd = new FormValidator(validateSetting, formElementAdd);

api.getUser();
api.getCards()
  .then((result) => {
    const section = new Section({result, renderer}, '.elements__list');
    section.renderList();
  })
  .catch((err) => {
    console.log(err);
  });


popupWithPicture.setEventListeners();
popupWithFormAvatar.setEventListeners();
popupWithFormEdit.setEventListeners();
popupWithFormAdd.setEventListeners();
popupWithConfirm.setEventListeners();
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

