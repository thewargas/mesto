import { openPopup } from "./index.js";
import { popupImage } from "./variables.js";

class Card {
  constructor(dataCard) {
    this._name = dataCard.name;
    this._link = dataCard.link;
  }

  _getTemplateCard() {
    const card = document
      .querySelector(`#card`)
      .content.querySelector(`.element`)
      .cloneNode(true);

    return card;
  }

  // Событие удаления карточки
  _handleDeleteCard() {
    this._newCard.remove();
  }

  // Событие переключения лайка
  _handleSwitchLike = () => {
    this._newCard
      .querySelector(`.element__like-button`)
      .classList.toggle(`element__like-button_active`);
  };

  // Установка слушателей
  _setEventListeners() {
    const likeButton = this._newCard.querySelector(`.element__like-button`);
    likeButton.addEventListener(`click`, () => this._handleSwitchLike());

    const cardImage = this._newCard.querySelector(`.element__image`); ///
    cardImage.addEventListener(`click`, () => {
      openPopup(popupImage);
    });

    const trashButton = this._newCard.querySelector(`.element__trash-button`);
    trashButton.addEventListener(`click`, () => this._handleDeleteCard());
  }

  _setData() {
    // Переменные для попапа картинки
    const titleOutput = document.querySelector(`.popup__image-title`);
    const urlOutput = document.querySelector(`.popup__image`);

    // Переменные для карточки
    const title = this._newCard.querySelector(`.element__title`);
    const cardImage = this._newCard.querySelector(`.element__image`);

    title.textContent = titleOutput.textContent = this._name;

    cardImage.src = urlOutput.src = this._link;
    cardImage.alt = urlOutput.alt = `Место: ` + this._name;
  }

  getView() {
    this._newCard = this._getTemplateCard();
    this._setEventListeners();
    this._setData();

    return this._newCard;
  }
}

export default Card;
