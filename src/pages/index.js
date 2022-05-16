import './index.css';
import { validateSetting, buttonEdit, buttonAvatar, buttonAdd, formElementAvatar, formElementEdit, nameInput, jobInput, formElementAdd, nameElement,
  textElement, avatarInput, buttonSubmitPopupAvatar, buttonSubmitPopupEdit, buttonSubmitPopupAdd } from '../utils/constants.js';
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

  api.setAvatar(avatarInput)
    .then(res => {
      buttonAvatar.style.backgroundImage = `url(${res.avatar})`;
    })
    .catch(err => console.log(err));

  popupWithFormAvatar.close();
};

const submitPopupEdit = () => {
  renderLoading(buttonSubmitPopupEdit);

  api.setUser({name: nameInput, job: jobInput})
    .then(res => {
      nameElement.textContent = res.name;
      textElement.textContent = res.about;
    })
    .catch(err => console.log(err));

  popupWithFormEdit.close();
};

const submitPopupAdd = (inupts) => {
  renderLoading(buttonSubmitPopupAdd);

  section
    .then(res => {
      res.addItem(inupts)
    })
    .catch(err => console.log(err));
  
  popupWithFormAdd.close();
};

const submitPopupConfirm = (id) => {
  api.deleteCard(id)
    .catch(err => console.log(err));

  popupWithConfirm.close();
};

const popupWithPicture = new PopupWithImage('.popup_image');
const popupWithFormAvatar = new PopupWithForm('.popup_avatar', submitPopupAvatar);
const popupWithFormEdit = new PopupWithForm('.popup_user', submitPopupEdit);
const popupWithFormAdd = new PopupWithForm('.popup_card', submitPopupAdd);
export const popupWithConfirm = new PopupWithConfirmation('.popup_confirm', submitPopupConfirm);
const formAvatar = new FormValidator(validateSetting, formElementAvatar);
const formEdit = new FormValidator(validateSetting, formElementEdit);
const formAdd = new FormValidator(validateSetting, formElementAdd);
export const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-41',
  headers: {
    authorization: 'eed10f86-1fc3-40f4-979c-57d15047e1b5',
    'Content-Type': 'application/json'
  }
});
const section = api.getCards()
  .then(result => {
    const section = new Section({result, renderer}, '.elements__list', api);
    return section;
  })


popupWithPicture.setEventListeners();
popupWithFormAvatar.setEventListeners();
popupWithFormEdit.setEventListeners();
popupWithFormAdd.setEventListeners();
popupWithConfirm.setEventListeners();
formAvatar.enableValidation();
formEdit.enableValidation();
formAdd.enableValidation();

api.getUser({name: nameElement, text: textElement, avatar: buttonAvatar})
  .catch(err => console.log(err));

section
  .then(result => {
    result.renderList();
  })
  .catch(err => console.log(err));


buttonAvatar.addEventListener('click', () => {
  formAvatar.setSubmitButtonStateDisabled();
  buttonSubmitPopupAvatar.textContent = 'Сохранить'
  popupWithFormAvatar.open();
  formEdit.resetErrors();
});

buttonEdit.addEventListener('click', () => {
  const newValues = new UserInfo({name: '.profile__name', job: '.profile__text'});
  newValues.setUserInfo(newValues.getUserInfo());
  buttonSubmitPopupEdit.textContent = 'Сохранить'
  popupWithFormEdit.open();
  formEdit.resetErrors();
});

buttonAdd.addEventListener('click', () => {
  formAdd.setSubmitButtonStateDisabled();
  buttonSubmitPopupAdd.textContent = 'Создать'
  popupWithFormAdd.open();
  formAdd.resetErrors();
});

