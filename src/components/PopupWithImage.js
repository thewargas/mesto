import Popup from "./Popup.js";
export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImageTitle = this._popup.querySelector(".popup__image-title");
    this._popupImage = this._popup.querySelector(".popup__image");
  }

  open(options) {
    super.open();

    this._popupImageTitle.textContent = options.name;
    this._popupImage.src = options.link;
    this._popupImage.alt = `Место: ` + options.name;
  }
}
