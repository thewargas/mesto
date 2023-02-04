import Popup from "./Popup.js";
export default class PopupWithDeleteCard extends Popup {
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
