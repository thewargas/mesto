// Событие удаления карточки

const handleDeleteCard = (event) => {
  event.target.closest(`.element`).remove();
};

// Событие переключения лайка

const handleSwitchLike = (event) => {
  event.classList.toggle(`element__like-button_active`);
};

// Событие перед открытием попапа

const handleOpenImage = (event) => {
  titleOutput.textContent = event.name;
  urlOutput.src = event.link;
  urlOutput.alt = `Место: ` + event.name;

  openPopup(popupImage);
};

// Генерация карточки

const generateCard = (dataCard) => {
  const newCard = cardTemplate.cloneNode(true);

  const title = newCard.querySelector(`.element__title`);
  title.textContent = dataCard.name;

  const cardImage = newCard.querySelector(`.element__image`);
  cardImage.src = dataCard.link;
  cardImage.alt = `Место: ` + dataCard.name;

  const likeButton = newCard.querySelector(`.element__like-button`);
  likeButton.addEventListener(`click`, () => {
    handleSwitchLike(likeButton);
  });

  cardImage.addEventListener(`click`, () => {
    handleOpenImage(dataCard);
  });

  const trashButton = newCard.querySelector(`.element__trash-button`);
  trashButton.addEventListener(`click`, handleDeleteCard);

  return newCard;
};

// Добавление карточки

const renderCard = (dataCard) => {
  cardsContainer.prepend(generateCard(dataCard));
};

// Событие нажатия кнопки ESC
function handleCloseByEsc(event) {
  const key = event.key;
  if (key === "Escape") {
    closePopup(document.querySelector(".popup_active"));
  }
}

// Открытия и закрытия попапов

function openPopup(popup) {
  popup.classList.add(`popup_active`);
  document.addEventListener("keydown", handleCloseByEsc);
}

function closePopup(event) {
  event.classList.remove(`popup_active`);
  document.removeEventListener("keydown", handleCloseByEsc);
  clearErrors(event);
}

// Подтверждения попапа профиля

function handleFormProfileSubmit() {
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

closeButtonProfile.addEventListener(`click`, () => {
  closePopup(popupProfile);
});
closeButtonCard.addEventListener(`click`, () => {
  closePopup(popupCard);
});
closeButtonImage.addEventListener(`click`, () => {
  closePopup(popupImage);
});

addButton.addEventListener(`click`, () => {
  openPopup(popupCard);
});

popups.forEach((enterPopup) => {
  enterPopup.addEventListener(`click`, (event) => {
    if (event.target.classList.contains("popup_active")) {
      closePopup(enterPopup);
    }
  });
});

editButton.addEventListener(`click`, () => {
  nameInput.value = nameTitle.textContent;
  jobInput.value = jobTitle.textContent;
  openPopup(popupProfile);
});

// Воспроизведение с загрузкой страницы.
// Пересортировка массива в случайном порядке и уменьшение до 6 мест

initialCards.sort(() => 0.5 - Math.random());
initialCards = initialCards.slice(0, 6);

// Рендер для всех карточек

initialCards.forEach((dataCard) => {
  renderCard(dataCard);
});
