import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import {
  initialCards,
  configValidation,
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
  cardsContainer,
  formProfile,
  formCard,
} from "./variables.js";

// Добавление карточки

const renderCard = (dataCard) => {
  const card = new Card(dataCard);
  cardsContainer.prepend(card.getView());
};

// Событие нажатия кнопки ESC
function handleCloseByEsc(event) {
  const key = event.key;
  if (key === "Escape") {
    closePopup(document.querySelector(".popup_active"));
  }
}

// Открытия и закрытия попапов

export function openPopup(popup) {
  popup.classList.add(`popup_active`);
  document.addEventListener("keydown", handleCloseByEsc);
}

function closePopup(event) {
  event.classList.remove(`popup_active`);
  document.removeEventListener("keydown", handleCloseByEsc);

  if (event.classList.contains("popup_type_card")) {
    cardFormValidation.clearErrors();
  }
}

// Подтверждения попапа профиля

function handleFormProfileSubmit(evt) {
  evt.preventDefault();
  nameTitle.textContent = nameInput.value;
  jobTitle.textContent = jobInput.value;

  closePopup(popupProfile);
}

function handleFormCardSubmit() {
  renderCard({ name: titleInput.value, link: urlInput.value });

  popupFormCard.reset();

  closePopup(popupCard);
}

// Вывешивание слушателей

buttonAdd.addEventListener(`click`, () => {
  openPopup(popupCard);
});

popups.forEach((enterPopup) => {
  enterPopup.addEventListener(`click`, (event) => {
    if (
      event.target.classList.contains("popup_active") ||
      event.target.classList.contains("popup__close-button-image")
    ) {
      closePopup(enterPopup);
    }
  });
});

buttonEdit.addEventListener(`click`, () => {
  nameInput.value = nameTitle.textContent;
  jobInput.value = jobTitle.textContent;

  profileFormValidation.clearErrors();

  openPopup(popupProfile);
});

popupFormProfile.addEventListener(`submit`, handleFormProfileSubmit);

popupFormCard.addEventListener(`submit`, (evt) => {
  evt.preventDefault();
  handleFormCardSubmit();
});

// Воспроизведение с загрузкой страницы.
// Пересортировка массива в случайном порядке и уменьшение до 6 мест

initialCards.sort(() => 0.5 - Math.random());
initialCards = initialCards.slice(0, 6);

// Рендер для всех карточек

initialCards.forEach((dataCard) => {
  renderCard(dataCard);
});

// Включение валидации для формы профиля
const profileFormValidation = new FormValidator(configValidation, formProfile);
profileFormValidation.enableValidation();

// Включение валидации для формы добавления карточки
const cardFormValidation = new FormValidator(configValidation, formCard);
cardFormValidation.enableValidation();
