let initialCards = [
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
    name: "Великий Новогород",
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

// Объявление переменных

const editButton = document.querySelector(`.profile__edit-button`);
const popupProfile = document.querySelector(`.popup_type_profile`);
const addButton = document.querySelector(`.profile__add-button`);
const popupCard = document.querySelector(`.popup_type_card`);

const popupImage = document.querySelector(`.popup_type_image`);

// переменные для попапа профиля

const nameInput = document.querySelector(`.popup__input_type_name`);
const jobInput = document.querySelector(`.popup__input_type_job`);

const nameTitle = document.querySelector(`.profile__title`);
const jobTitle = document.querySelector(`.profile__subtitle`);

// переменные для попапа создания карточек

const titleInput = document.querySelector(`.popup__input_type_title`);
const urlInput = document.querySelector(`.popup__input_type_url`);

const titleOutput = document.querySelector(`.popup__image-title`);
const urlOutput = document.querySelector(`.popup__image`);

// Общая переменная попапов

const popups = document.querySelectorAll(`.popup`);

// Переменные конопок закрытия попапов

const closeButtonProfile = document.querySelector(`.popup__close-button_type_profile`);
const closeButtonCard = document.querySelector(`.popup__close-button_type_card`);
const closeButtonImage = document.querySelector(`.popup__close-button_type_image`);

//

const popupFormProfile = document.querySelector(`.popup__form_type_profile`);
const popupFormCard = document.querySelector(`.popup__form_type_card`);

//

const cardsContainer = document.querySelector(`.elements`);


// Шаблон

const cardTemplate = document.querySelector(`#card`).content.querySelector(`.element`);