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

// Открытия и закрытия попапов

function openPopup(popup) {
  popup.classList.add(`popup_active`);
  document.addEventListener("keydown", handleCloseByEsc);
  // Событие нажатия кнопки ESC
  function handleCloseByEsc(event) {
    const key = event.key;
    if (key === "Escape") {
      document.removeEventListener("keydown", handleCloseByEsc);
      closePopup(popup);
    }
  }
}

function closePopup(event) {
  event.classList.remove(`popup_active`);
  clearErrors(event);
}

// Удаление всех ошибок валидации

function clearErrors(enterPopup) {
  const borders = enterPopup.querySelectorAll(".popup__input_invalid");
  borders.forEach((border) => {
    border.classList.remove(`popup__input_invalid`);
  });
  const errors = enterPopup.querySelectorAll(".popup__form-error");
  errors.forEach((error) => {
    error.remove();
  });
}

// Подтверждения попапа профиля

function handleFormProfileSubmit(evt) {
  evt.preventDefault();
  nameTitle.textContent = nameInput.value;
  jobTitle.textContent = jobInput.value;

  closePopup(popupProfile);
}

function handleFormCardSubmit(evt) {
  evt.preventDefault();
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

// Валидация форм

const forms = document.querySelectorAll(".popup__form");
const FormValidators = {
  name: validateName,
  job: validateJob,
  title: validateTitle,
  url: validateUrl,
};

forms.forEach((enterForm) => {
  enableValidation(enterForm, FormValidators);
});

/*-----------------------FUNCTIONS-----------------------*/
function enableValidation(form, validators) {
  const inputsContainer = form.querySelector(".popup__inputs");
  let buttonDisabled = form.querySelector(`.popup__submit-button`);

  function validate(key, value, values) {
    const validator = validators[key];
    return validator(value, values);
  }

  function setError(key, errorMessage) {
    const inputEl = inputsContainer.querySelector(`.popup__input[name=${key}]`);
    let errorEl = inputsContainer.querySelector(
      `.popup__form-error[data-key=${key}]`
    );

    if (!errorEl) {
      errorEl = document.createElement("p");
      inputEl.after(errorEl);
    }

    inputEl.classList.add("popup__input_invalid");
    errorEl.classList.add("popup__form-error");
    buttonDisabled.classList.add("button_disabled");

    errorEl.dataset.key = key;
    errorEl.textContent = errorMessage;
  }

  function clearError(key) {
    const inputEl = inputsContainer.querySelector(`.popup__input[name=${key}]`);
    inputEl.classList.remove("popup__input_invalid");

    const errorEl = inputsContainer.querySelector(
      `.popup__form-error[data-key=${key}]`
    );
    if (errorEl) {
      errorEl.remove();
    }
  }

  form.addEventListener("input", (e) => {
    const key = e.target.name;
    const value = e.target.value;
    const formData = new FormData(e.currentTarget);
    const values = Object.fromEntries(formData);

    const errorMessage = validate(key, value, values);

    if (!errorMessage) {
      e.target.onblur = () => {
        e.target.dataset.dirty = "true";
      };
      // проверка всех полей перед активацией кнопки
      let ch = 0;
      formData.forEach((value, key) => {
        const errorMessages = validate(key, value, values);

        if (!errorMessages && ch == 0) {
          buttonDisabled.classList.remove("button_disabled");
          return;
        }

        buttonDisabled.classList.add("button_disabled");
        ch = 1;
      });
      clearError(key);
      return;
    }

    // есть ошибка
    if (e.target.dataset.dirty === "true") {
      setError(key, errorMessage);
      return;
    }

    // есть ошибка, но мы еще не ушли с поля
    e.target.onblur = () => {
      e.target.dataset.dirty = "true";
      setError(key, errorMessage);
    };
  });

  form.addEventListener("submit", (e) => {
    const formData = new FormData(e.currentTarget);
    const values = Object.fromEntries(formData);

    let isFormValid = true;

    formData.forEach((value, key) => {
      const errorMessage = validate(key, value, values);

      if (!errorMessage) {
        return;
      }

      setError(key, errorMessage);
      const inputEl = inputsContainer.querySelector(
        `.popup__input[name=${key}]`
      );
      inputEl.dataset.dirty = "true";

      isFormValid = false;
    });

    if (!isFormValid) {
      e.preventDefault();
      return;
    }

    // успешно введная форма
    if (e.target.classList.contains("popup__form_type_profile")) {
      handleFormProfileSubmit(e);
    }
    if (e.target.classList.contains("popup__form_type_card")) {
      handleFormCardSubmit(e);
      buttonDisabled.classList.add("button_disabled");
    }
  });
}

/*-----------------------VALIDATORS-----------------------*/
function validateName(value) {
  if (!value) {
    return "Вы пропустили это поле.";
  }

  if (value.length < 2) {
    return "Имя должно быть не меньше 2 символов";
  }

  if (value.length > 40) {
    return "Имя должно быть не больше 40 символов";
  }

  return null;
}

function validateJob(value) {
  if (!value) {
    return "Вы пропустили это поле.";
  }

  if (value.length < 2) {
    return "Информация должна быть не меньше 2 символов";
  }

  if (value.length > 40) {
    return "Информация должна быть не больше 200 символов";
  }

  return null;
}

function validateTitle(value) {
  if (!value) {
    return "Вы пропустили это поле.";
  }

  if (value.length < 2) {
    return "Название должно быть не меньше 2 символов";
  }

  if (value.length > 40) {
    return "Название должно быть не больше 30 символов";
  }

  return null;
}

function validateUrl(value) {
  if (!value) {
    return "Введите ссылку на картинку.";
  }

  const urlPattern = new RegExp(
    "^(https?:\\/\\/)?" + // validate protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // validate domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // validate OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // validate port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // validate query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // validate fragment locator
  if (!!!urlPattern.test(value)) {
    return "Введите корректную ссылку";
  }

  return null;
}
