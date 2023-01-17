import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import {
  initialCards,
  configValidation,
  configCards,
  buttonEdit,
  popupProfile,
  buttonAdd,
  popupCard,
  nameInput,
  jobInput,
  nameTitle,
  jobTitle,
  titleInput,
  urlInput,
  popups,
  popupFormProfile,
  popupFormCard,
  formProfile,
  formCard,
} from "../utils/constants.js";

// Добавление карточки

const renderCard = (dataCard) => {
  const card = new Card(dataCard, configCards, popupWithImage);
  return card.getView();
};

// Подтверждения попапа профиля

// function handleFormProfileSubmit(evt) {
//   evt.preventDefault();
//   nameTitle.textContent = nameInput.value;
//   jobTitle.textContent = jobInput.value;

//   closePopup(popupProfile);
// }

// function handleFormCardSubmit() {
//   renderCard({ name: titleInput.value, link: urlInput.value });

//   popupFormCard.reset();

//   closePopup(popupCard);
// }

// Вывешивание слушателей

buttonAdd.addEventListener(`click`, () => {
  openPopup(popupCard);

  cardFormValidation.clearErrors();
});

buttonEdit.addEventListener(`click`, () => {
  nameInput.value = profileInputs.getUserInfo().name.textContent;
  jobInput.value = profileInputs.getUserInfo().job.textContent;

  profileFormValidation.clearErrors();

  popupWithProfile.open();
});

// popupFormProfile.addEventListener(`submit`, handleFormProfileSubmit);

// popupFormCard.addEventListener(`submit`, (evt) => {
//   evt.preventDefault();
//   handleFormCardSubmit();
// });

// Воспроизведение с загрузкой страницы.
// Пересортировка массива в случайном порядке и уменьшение до 6 мест

// Создание экземпляра попапа карточки и вывешивание слушателей
const popupWithImage = new PopupWithImage(".popup_type_image");
popupWithImage.setEventListeners();

//
const profileInputs = new UserInfo(".profile__title", ".profile__subtitle");

//
const popupWithProfile = new PopupWithForm(".popup_type_profile", (evt) => {
  profileInputs.setUserInfo(evt);
  popupWithProfile.close();
});
popupWithProfile.setEventListeners();

let initialSortedCards = initialCards.sort(() => 0.5 - Math.random());
initialSortedCards = initialSortedCards.slice(0, 6);

// Рендер карточек
const cardRenderer = new Section(
  {
    items: initialSortedCards,
    renderer: (dataCard) => {
      cardRenderer.addItem(renderCard(dataCard));
    },
  },
  ".elements"
);

// Рендер для начальных карточек
cardRenderer.renderItems();

// Включение валидации для формы профиля
const profileFormValidation = new FormValidator(configValidation, formProfile);
profileFormValidation.enableValidation();

// Включение валидации для формы добавления карточки
const cardFormValidation = new FormValidator(configValidation, formCard);
cardFormValidation.enableValidation();
