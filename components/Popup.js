export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
  }

  _handleEscClose(event) {
    const key = event.key;
    if (key === "Escape") {
      this.close();
    }
  }

  open() {
    this._popup.classList.add(`popup_active`);
    document.addEventListener("keydown", (event) => {
      this._handleEscClose(event);
    });
  }

  close() {
    this._popup.classList.remove(`popup_active`);
    document.removeEventListener("keydown", (event) => {
      this._handleEscClose(event);
    });
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
