// Конфиг api
export const configApi = {
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-58",
  headers: {
    authorization: "c9a28bcb-0219-422f-80d6-0648efb4bc5b",
    "Content-Type": "application/json",
  },
};

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
  likeCounterSelector: ".element__like-counter",
  trashButtonSelector: ".element__trash-button",
  templateSelector: "#card",
  cardSelector: ".element",
};

// Объявление переменных
export const buttonEdit = document.querySelector(`.profile__edit-button`);
export const buttonAdd = document.querySelector(`.profile__add-button`);
export const buttonAvatar = document.querySelector(`.profile__avatar-button`);

// переменные для попапа профиля
export const nameInput = document.querySelector(`.popup__input_type_name`);
export const jobInput = document.querySelector(`.popup__input_type_job`);

// переменая контейнера карточек
export const cardsContainer = document.querySelector(`.elements`);

// переменные формы попапов
export const formProfile = document.querySelector(`.popup__form_type_profile`);
export const formCard = document.querySelector(`.popup__form_type_card`);
export const formAvatar = document.querySelector(`.popup__form_type_avatar`);
