// buttons
export const buttonEdit = document.querySelector('.profile__button-edit');
export const buttonAdd = document.querySelector('.profile__button-add');

// inputs and elements
export const popupUser = document.querySelector('.popup_user');
export const popupCard = document.querySelector('.popup_card');
export const formElementEdit = document.querySelector('.popup__form_edit');
export const formElementAdd = document.querySelector('.popup__form_add');
export const nameElement = document.querySelector('.profile__name');
export const textElement = document.querySelector('.profile__text');
export const nameInput = document.querySelector('.popup__input_field_name');
export const jobInput = document.querySelector('.popup__input_field_job');
export const placeInput = document.querySelector('.popup__input_field_place');
export const linkInput = document.querySelector('.popup__input_field_link');
export const cardsContainer = document.querySelector('.elements__list');
export const templateElement = document.querySelector('.element-template');


export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

export const validateSetting = {
  form: '.popup__form',
  input: '.popup__input',
  buttonAddPopup: '.popup__button-add',
  buttonAddPopupInvalid: 'popup__button-add_invalid',
  buttonAddPopupHover: 'popup__button-add_hover',
  inputInvalid: 'popup__input_invalid',
};