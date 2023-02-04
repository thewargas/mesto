import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._formInputs = this._popup.querySelectorAll(".popup__input");
    this._submitButton = this._popup.querySelector(".popup__submit-button");
  }

  switchLoading(isLoading) {
    if (isLoading) {
      this._originalText = this._submitButton.textContent;
      this._submitButton.textContent = "Сохранение...";
    } else {
      this._submitButton.textContent = this._originalText;
    }
  }

  _getInputValues() {
    const inputsValue = {};
    this._formInputs.forEach((input) => {
      inputsValue[input.name] = input.value;
    });
    return inputsValue;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm = this._popup.querySelector(".popup__form");
    this._popupForm.addEventListener(`submit`, (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });
  }

  close() {
    super.close();
    this._popupForm.reset();
  }
}
