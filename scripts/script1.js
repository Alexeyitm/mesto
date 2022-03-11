// create cards
//const cardTemplate = document.querySelector('.element-template').content;
//const cardList = document.querySelector('.elements__list');

//const createCards = (arr) => {
  //for (let i = 0; i < arr.length; i++) {
  //  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  //  cardElement.querySelector('.element__img').src = initialCards[i].link;
  //  cardElement.querySelector('.element__img').alt = initialCards[i].name;
  //  cardElement.querySelector('.element__figcaption').textContent = initialCards[i].name;
  //  cardList.append(cardElement);
  //}
//}
//createCards(initialCards);


// open and close popup-edit
//const editButton = document.querySelector('.profile__button-edit');
//const closeButton = document.querySelector('.popup__button-close');
//const popupTitle = document.querySelector('.popup__title');
//const popupElement = document.querySelector('.popup');

//editButton.addEventListener('click', function () {
//  popupElement.classList.add('popup_opened');
//  nameInput.value = nameElement.textContent;
//  jobInput.value = textElement.textContent;
//});

//closeButton.addEventListener('click', function () {
//  popupElement.classList.remove('popup_opened');
//});


// change name and text
//const nameElement = document.querySelector('.profile__name');
//const textElement = document.querySelector('.profile__text');
//const nameInput = document.querySelector('.popup__input_field_name');
//const jobInput = document.querySelector('.popup__input_field_job');
//const formElement = document.querySelector('.popup__form');

//const submitHandlerForm = (evt) => {
//  evt.preventDefault();
//  nameElement.textContent = nameInput.value;
//  textElement.textContent = jobInput.value;
//  popupElement.classList.remove('popup_opened');
//};
//formElement.addEventListener('submit', submitHandlerForm);


// create, open and close popup-add
//const addButton = document.querySelector('.profile__button-add');
//const popupAddElement = popupElement.cloneNode(true);
//popupElement.after(popupAddElement);
//popupAddElement.querySelector('.popup__title').textContent = 'Новое место'
//popupAddElement.querySelector('.popup__input_field_name').placeholder = 'Название';
//popupAddElement.querySelector('.popup__input_field_job').placeholder = 'Ссылка на картинку';

//addButton.addEventListener('click', function () {
  //popupAddElement.classList.add('popup_opened');
//});

//popupAddElement.querySelector('.popup__button-close').addEventListener('click', function () {
  //popupAddElement.classList.remove('popup_opened');
//});


//add new card
const submitHandlerFormAdd = (evt) => {
  evt.preventDefault();
  initialCards.push({name: popupAddElement.querySelector('.popup__input_field_name').value, link: popupAddElement.querySelector('.popup__input_field_job').value});

  const newCardElement = cardTemplate.querySelector('.element').cloneNode(true);
  newCardElement.querySelector('.element__img').src = initialCards[initialCards.length - 1].link;
  newCardElement.querySelector('.element__img').alt = initialCards[initialCards.length - 1].name;
  newCardElement.querySelector('.element__figcaption').textContent = initialCards[initialCards.length - 1].name;
  cardList.prepend(newCardElement);
  popupAddElement.classList.remove('popup_opened');

  //add "like" for new card
  //newCardElement.querySelector('.element__svg-heart').addEventListener('click', function () {
  //  newCardElement.querySelector('.element__svg-heart').classList.toggle('element__svg-heart_active');
  //});
  //add "delete" for new card
  //newCardElement.querySelector('.element__button-delete').addEventListener('click', function () {
  //  newCardElement.querySelector('.element__button-delete').closest('.element').remove();
  //});
  // add open/close popup-img for new card
  //newCardElement.querySelector('.element__img').addEventListener('click', function () {
  //  popupImg.classList.add('popup-img_opened');
  //  popupImg.querySelector('.popup-img__picture').src = newCardElement.querySelector('.element__img').src;
  //  popupImg.querySelector('.popup-img__figcaption').textContent = newCardElement.querySelector('.element__img').alt;
  //});
};
popupAddElement.querySelector('.popup__form').addEventListener('submit', submitHandlerFormAdd);


// add "likes"
//const heartsButton = document.querySelectorAll('.element__svg-heart');
//for (let heart of heartsButton) {
//  heart.addEventListener('click', function () {
//    heart.classList.toggle('element__svg-heart_active');
//  });
//};


// delete card
//const deleteButton = document.querySelectorAll('.element__button-delete');
//for (let item of deleteButton) {
//  item.addEventListener('click', function () {
//    item.closest('.element').remove()
//  }); 
//};


// open and close popup-img
//const elementImages = document.querySelectorAll('.element__img');
//const popupImg = document.querySelector('.popup-img');

//for (let image of elementImages) {
//  image.addEventListener('click', function () {
//    popupImg.classList.add('popup-img_opened');
//    popupImg.querySelector('.popup-img__picture').src = image.src;
//    popupImg.querySelector('.popup-img__figcaption').textContent = image.alt;
//  });
  
//  popupImg.querySelector('.popup-img__button-close').addEventListener('click', function () {
//    popupImg.classList.remove('popup-img_opened');
//  });  
//};




