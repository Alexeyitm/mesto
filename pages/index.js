import { initialCards, validateSetting, popupUser, popupCard, popupImage, buttonEdit, buttonAdd, 
  formElementEdit, formElementAdd, nameElement, textElement} from '../scripts/src/utils/constants.js';
import FormValidator from '../scripts/src/components/FormValidator.js';
import Section from '../scripts/src/components/Section.js';
import PopupWithImage from "../scripts/src/components/PopupWithImage.js"
import PopupWithForm from "../scripts/src/components/PopupWithForm.js"
import UserInfo from "../scripts/src/components/UserInfo.js"
import { renderer, submitPopupEdit, submitPopupAdd } from '../scripts/src/utils/utils.js';

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