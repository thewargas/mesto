const enableValidation = (enterOptions) => {
  const validationOptions = enterOptions;
  const formList = Array.from(
    document.querySelectorAll(validationOptions.formSelector)
  );
  formList.forEach((formElement) => {
    setEventListeners(formElement);
  });

  function setEventListeners(form) {
    const inputList = Array.from(
      form.querySelectorAll(validationOptions.inputSelector)
    );
    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", function () {
        checkInputValidity(form, inputElement);
        toggleButtonState(hasInvalidInput(inputList), form, validationOptions);
      });
    });
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
    toggleButtonState(false, enterPopup, configValidation);
  }
}

// переключатель кнопки submit

function toggleButtonState(bool, key, validationOptions) {
  const buttonElement = key.querySelector(
    validationOptions.submitButtonSelector
  );
  if (bool) {
    buttonElement.classList.add(validationOptions.inactiveButtonClass);
  } else {
    buttonElement.classList.remove(validationOptions.inactiveButtonClass);
  }
  buttonElement.disabled = bool;
}

enableValidation(configValidation);
