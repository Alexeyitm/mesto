// buttons
export const buttonEdit = document.querySelector('.profile__button-edit');
export const buttonAdd = document.querySelector('.profile__button-add');
export const buttonAvatar = document.querySelector('.profile__photo');

// inputs and elements
export const formElementAvatar = document.querySelector('.popup__form_avatar');
export const formElementEdit = document.querySelector('.popup__form_edit');
export const formElementAdd = document.querySelector('.popup__form_add');
export const nameElement = document.querySelector('.profile__name');
export const textElement = document.querySelector('.profile__text');
export const avatarInput = document.querySelector('.popup__input_field_avatar-link');
export const nameInput = document.querySelector('.popup__input_field_name');
export const jobInput = document.querySelector('.popup__input_field_job');
export const placeInput = document.querySelector('.popup__input_field_place');
export const linkInput = document.querySelector('.popup__input_field_link');
export const profileAvatar = document.querySelector('.profile__avatar');



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