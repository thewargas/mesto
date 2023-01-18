import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._formInputs = this._popup.querySelectorAll(".popup__input");
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
      this.close();
    });
  }

  close() {
    super.close();
    this._popupForm.reset();
  }
}
