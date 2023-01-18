import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import {
  initialCards,
  configValidation,
  configCards,
  buttonEdit,
  buttonAdd,
  nameInput,
  jobInput,
  formProfile,
  formCard,
} from "../utils/constants.js";

// Добавление карточки
const renderCard = (dataCard) => {
  const card = new Card(dataCard, configCards, popupWithImage);
  return card.getView();
};

// Вывешивание слушателей
buttonAdd.addEventListener(`click`, () => {
  cardFormValidation.clearErrors();
  popupWithCard.open();
});
buttonEdit.addEventListener(`click`, () => {
  nameInput.value = profileInputs.getUserInfo().name.textContent;
  jobInput.value = profileInputs.getUserInfo().job.textContent;

  profileFormValidation.clearErrors();

  popupWithProfile.open();
});

// Воспроизведение с загрузкой страницы
// Создание экземпляра попапа карточки и вывешивание слушателей
const popupWithImage = new PopupWithImage(".popup_type_image");
popupWithImage.setEventListeners();

// Создание экземпляра управления отображением информации о пользователе на странице
const profileInputs = new UserInfo(".profile__title", ".profile__subtitle");

// Создание экземпляра попапа профиля и вывешивание слушателей
const popupWithProfile = new PopupWithForm(".popup_type_profile", (evt) => {
  profileInputs.setUserInfo(evt);
  popupWithProfile.close();
});
popupWithProfile.setEventListeners();

// Создание экземпляра попапа создания карточки и вывешивание слушателей
const popupWithCard = new PopupWithForm(".popup_type_card", (evt) => {
  cardRenderer.addItem(renderCard({ name: evt.title, link: evt.url }));
  popupWithCard.close();
});
popupWithCard.setEventListeners();

// Пересортировка массива в случайном порядке и уменьшение до 6 мест
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
