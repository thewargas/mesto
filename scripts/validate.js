const enableValidation = (enterOptions) => {
  const validationOptions = enterOptions;
  const formList = Array.from(
    document.querySelectorAll(validationOptions.formSelector)
  );
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();

      if (formElement.classList.contains("popup__form_type_profile")) {
        handleFormProfileSubmit(formElement);
      }
      if (formElement.classList.contains("popup__form_type_card")) {
        handleFormCardSubmit(formElement);
        const buttonElement = formElement.querySelector(
          validationOptions.submitButtonSelector
        );
        buttonElement.classList.add(validationOptions.inactiveButtonClass);
        buttonElement.disabled = true;
      }
    });

    setEventListeners(formElement);
  });

  function setEventListeners(form) {
    const inputList = Array.from(
      form.querySelectorAll(validationOptions.inputSelector)
    );
    const buttonElement = form.querySelector(
      validationOptions.submitButtonSelector
    );
    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", function () {
        checkInputValidity(form, inputElement);
        toggleButtonState(inputList, buttonElement);
      });
    });
  }

  function toggleButtonState(inputList, buttonElement) {
    if (hasInvalidInput(inputList)) {
      buttonElement.classList.add(validationOptions.inactiveButtonClass);
      buttonElement.disabled = true;
    } else {
      buttonElement.classList.remove(validationOptions.inactiveButtonClass);
      buttonElement.disabled = false;
    }
  }

  function hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  const checkInputValidity = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      hideInputError(formElement, inputElement);
    }
  };

  function showInputError(formElement, inputElement, errorMessage) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(validationOptions.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(validationOptions.errorClass);
  }

  function hideInputError(formElement, inputElement) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(validationOptions.inputErrorClass);
    errorElement.classList.remove(validationOptions.errorClass);
    errorElement.textContent = "";
  }
};

// Удаление всех ошибок валидации

function clearErrors(enterPopup) {
  const errors = enterPopup.querySelectorAll(".popup__input-error_active");
  errors.forEach((error) => {
    error.classList.remove(`popup__input-error_active`);
    error.textContent = "";
  });
  const borders = enterPopup.querySelectorAll(".popup__input_type_error");
  borders.forEach((border) => {
    border.classList.remove(`popup__input_type_error`);
  });

  if (enterPopup.classList.contains("popup_type_profile")) {
    const buttonElement = enterPopup.querySelector(".popup__submit-button");
    buttonElement.classList.remove("button_disabled");
    buttonElement.disabled = false;
  }
}

enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit-button",
  inactiveButtonClass: "button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error_active",
});
