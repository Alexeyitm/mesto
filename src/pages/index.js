import './index.css';
import { validateSetting, buttonEdit, buttonAvatar, buttonAdd, formElementAvatar, formElementEdit, formElementAdd, nameElement,
  textElement, buttonSubmitPopupAvatar, buttonSubmitPopupEdit, buttonSubmitPopupAdd, avatarImg } from '../utils/constants.js';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js'
import PopupWithForm from '../components/PopupWithForm.js'
import PopupWithConfirmation from '../components/PopupWithConfirmation';
import UserInfo from '../components/UserInfo.js'
import Api from '../components/Api';


export function newCard(item) {
  const card = new Card(item, '.element-template', () => {
    popupWithPicture.open(item.name, item.link);
  }); 
  return card.generateCard();  
}

export const renderer = (item) => {
  return newCard(item);
};

const renderLoading = (button) => {
  button.textContent = 'Сохранение...';
}

const submitPopupAvatar = () => {
  renderLoading(buttonSubmitPopupAvatar);
  api.setAvatar(popupWithFormAvatar.getInputValues())
    .then(res => {
      newValues.setUserAvatar(res.avatar);
      popupWithFormAvatar.close();
    })
    .catch(err => console.log(err))
    .finally(setTimeout(function() {buttonSubmitPopupAvatar.textContent = 'Сохранить'}, 1000));
};

const submitPopupEdit = () => {
  renderLoading(buttonSubmitPopupEdit);
  api.setUser(popupWithFormEdit.getInputValues())
    .then(res => {
      nameElement.textContent = res.name;
      textElement.textContent = res.about;
      popupWithFormEdit.close();
    })
    .catch(err => console.log(err))
    .finally(setTimeout(function() {buttonSubmitPopupEdit.textContent = 'Сохранить'}, 1000));
};

const submitPopupAdd = (item) => {
  renderLoading(buttonSubmitPopupAdd);
  section.addItem(item);
};

const submitPopupConfirm = (id, card) => {
  api.deleteCard(id)
    .then(res => {
      card.remove();
      popupWithConfirm.close();
    })
    .catch(err => console.log(err));
};

export const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-41',
  headers: {
    authorization: 'eed10f86-1fc3-40f4-979c-57d15047e1b5',
    'Content-Type': 'application/json'
  }
});
const popupWithPicture = new PopupWithImage('.popup_image');
const popupWithFormAvatar = new PopupWithForm('.popup_avatar', submitPopupAvatar);
const popupWithFormEdit = new PopupWithForm('.popup_user', submitPopupEdit);
export const popupWithFormAdd = new PopupWithForm('.popup_card', submitPopupAdd);
export const popupWithConfirm = new PopupWithConfirmation('.popup_confirm', submitPopupConfirm);
const formAvatar = new FormValidator(validateSetting, formElementAvatar);
const formEdit = new FormValidator(validateSetting, formElementEdit);
const formAdd = new FormValidator(validateSetting, formElementAdd);
const section = new Section({renderer}, '.elements__list', api);
export const newValues = new UserInfo({name: '.profile__name', job: '.profile__text', avatar: '.profile__avatar-img'});


popupWithPicture.setEventListeners();
popupWithFormAvatar.setEventListeners();
popupWithFormEdit.setEventListeners();
popupWithFormAdd.setEventListeners();
popupWithConfirm.setEventListeners();
formAvatar.enableValidation();
formEdit.enableValidation();
formAdd.enableValidation();

Promise.all([api.getUser(), api.getCards()])
  .then(([userInfo, cards]) => {
    nameElement.textContent = userInfo.name;
    textElement.textContent = userInfo.about;
    avatarImg.src = userInfo.avatar;
    avatarImg.alt = userInfo.name;
    newValues.setUserId(userInfo._id);

    section.renderItems(cards);
  })
  .catch(err => console.log(err));

buttonAvatar.addEventListener('click', () => {
  formAvatar.setSubmitButtonStateDisabled();
  popupWithFormAvatar.open();
  formAvatar.resetErrors();
});

buttonEdit.addEventListener('click', () => {
  newValues.setUserInfo(newValues.getUserInfo());
  popupWithFormEdit.open();
  formEdit.resetErrors();
});

buttonAdd.addEventListener('click', () => {
  formAdd.setSubmitButtonStateDisabled();
  popupWithFormAdd.open();
  formAdd.resetErrors();
});

