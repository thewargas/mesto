export const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://images.unsplash.com/photo-1535557142533-b5e1cc6e2a5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1829&q=80",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
  {
    name: "Великий Новгород",
    link: "https://images.unsplash.com/photo-1600253613497-8a39b8b4a5de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
  },
  {
    name: "Москва",
    link: "https://images.unsplash.com/photo-1520106212299-d99c443e4568?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  },
  {
    name: "Сибирь",
    link: "https://images.unsplash.com/photo-1632895645316-cd5571fc692a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    name: "Эльбрус",
    link: "https://images.unsplash.com/photo-1626518139514-65676cf25bac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  },
  {
    name: "Санкт-Петербург",
    link: "https://images.unsplash.com/photo-1555460285-763ba96917d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  },
  {
    name: "Таганай",
    link: "https://images.unsplash.com/photo-1504613879446-6b4f44cf11ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1752&q=80",
  },
];

// Конфиг валидатора

export const configValidation = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit-button",
  inactiveButtonClass: "button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error_active",
};

export const configCards = {
  imageSelector: ".element__image",
  titleSelector: ".element__title",
  likeButtonSelector: ".element__like-button",
  likeButtonActive: "element__like-button_active",
  trashButtonSelector: ".element__trash-button",
  templateSelector: "#card",
  cardSelector: ".element",
};

// Объявление переменных

export const buttonEdit = document.querySelector(`.profile__edit-button`);
export const popupProfile = document.querySelector(`.popup_type_profile`);
export const buttonAdd = document.querySelector(`.profile__add-button`);
export const popupCard = document.querySelector(`.popup_type_card`);

// переменные для попапа профиля

export const nameInput = document.querySelector(`.popup__input_type_name`);
export const jobInput = document.querySelector(`.popup__input_type_job`);

export const nameTitle = document.querySelector(`.profile__title`);
export const jobTitle = document.querySelector(`.profile__subtitle`);

// переменные для попапа создания карточек

export const titleInput = document.querySelector(`.popup__input_type_title`);
export const urlInput = document.querySelector(`.popup__input_type_url`);

// Общая переменная попапов

export const popups = document.querySelectorAll(`.popup`);

//

export const popupFormProfile = document.querySelector(
  `.popup__form_type_profile`
);
export const popupFormCard = document.querySelector(`.popup__form_type_card`);

//

export const cardsContainer = document.querySelector(`.elements`);

//

export const formProfile = document.querySelector(`.popup__form_type_profile`);
export const formCard = document.querySelector(`.popup__form_type_card`);
