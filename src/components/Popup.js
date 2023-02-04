export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  switchLoading(isLoading) {
    if (isLoading) {
      this._submitButton.textContent = "Сохранение...";
    } else {
      this._submitButton.textContent = this._originalText;
    }
  }

  _handleEscClose(event) {
    const key = event.key;
    if (key === "Escape") {
      this.close();
    }
  }

  open() {
    this._popup.classList.add(`popup_active`);
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this._popup.classList.remove(`popup_active`);
    document.removeEventListener("keydown", this._handleEscClose);
  }

  setEventListeners() {
    this._popup.addEventListener(`click`, (event) => {
      if (
        event.target.classList.contains("popup_active") ||
        event.target.classList.contains("popup__close-button-image")
      ) {
        this.close();
      }
    });
  }
}
