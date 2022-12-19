class FormValidator {
  constructor(enterOptions, form) {
    this._form = form;

    this._formSelector = enterOptions.formSelector;
    this._inputSelector = enterOptions.inputSelector;
    this._submitButtonSelector = enterOptions.submitButtonSelector;
    this._inactiveButtonClass = enterOptions.inactiveButtonClass;
    this._inputErrorClass = enterOptions.inputErrorClass;
    this._errorClass = enterOptions.errorClass;

    this._inputList = Array.from(
      form.querySelectorAll(enterOptions.inputSelector)
    );
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _showInputError(inputElement, errorMessage) {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  }

  _hideInputError(inputElement) {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = "";
  }

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _toggleButtonState(bool) {
    const buttonElement = this._form.querySelector(this._submitButtonSelector);
    if (bool) {
      buttonElement.classList.add(this._inactiveButtonClass);
    } else {
      buttonElement.classList.remove(this._inactiveButtonClass);
    }
    buttonElement.disabled = bool;
  }

  _setEventListeners() {
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState(this._hasInvalidInput());
      });
    });
  }

  clearErrors() {
    const errors = this._form.querySelectorAll(".popup__input-error_active");
    errors.forEach((error) => {
      error.classList.remove(`popup__input-error_active`);
      error.textContent = "";
    });
    const borders = this._form.querySelectorAll(".popup__input_type_error");
    borders.forEach((border) => {
      border.classList.remove(`popup__input_type_error`);
    });

    this._toggleButtonState(this._hasInvalidInput());
  }

  enableValidation() {
    this._setEventListeners();
  }
}

export default FormValidator;
