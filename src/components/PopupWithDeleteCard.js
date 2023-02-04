import Popup from "./Popup.js";
export default class PopupWithDeleteCard extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._submitButton = this._popup.querySelector(".popup__submit-button");
    this._originalText = this._submitButton.textContent;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm = this._popup.querySelector(".popup__form");
    this._popupForm.addEventListener(`submit`, (evt) => {
      evt.preventDefault();
      this._handleDeleteCard();
    });
  }

  open(handleDeleteCard) {
    super.open();
    this._handleDeleteCard = handleDeleteCard;
  }
}
