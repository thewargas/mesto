class Card {
  constructor(dataCard, openPopup, configCards) {
    this._name = dataCard.name;
    this._link = dataCard.link;

    this._openPopup = openPopup;

    this._imageSelector = configCards.imageSelector;
    this._titleSelector = configCards.titleSelector;
    this._likeButtonSelector = configCards.likeButtonSelector;
    this._likeButtonActive = configCards.likeButtonActive;
    this._trashButtonSelector = configCards.trashButtonSelector;
    this._templateSelector = configCards.templateSelector;
    this._cardSelector = configCards.cardSelector;
    this._popupImageSelector = configCards.popupImageSelector;

    this._popupImageTitle = configCards.popupImageTitle;
    this._popupImage = configCards.popupImage;
  }

  _getTemplateCard() {
    const card = document
      .querySelector(this._templateSelector)
      .content.querySelector(this._cardSelector)
      .cloneNode(true);

    return card;
  }

  // Событие удаления карточки
  _handleDeleteCard() {
    this._newCard.remove();
    this._newCard = null;
  }

  _handleOpenCard() {
    // Переменные для попапа карточки
    const titleOutput = document.querySelector(this._popupImageTitle);
    const urlOutput = document.querySelector(this._popupImage);

    titleOutput.textContent = this._name;

    urlOutput.src = this._link;
    urlOutput.alt = `Место: ` + this._name;

    this._openPopup(document.querySelector(this._popupImageSelector));
  }

  // Событие переключения лайка
  _handleSwitchLike = () => {
    this._newCard
      .querySelector(this._likeButtonSelector)
      .classList.toggle(this._likeButtonActive);
  };

  // Установка слушателей
  _setEventListeners() {
    const likeButton = this._newCard.querySelector(this._likeButtonSelector);
    likeButton.addEventListener(`click`, () => this._handleSwitchLike());

    const cardImage = this._newCard.querySelector(this._imageSelector);
    cardImage.addEventListener(`click`, () => this._handleOpenCard());

    const trashButton = this._newCard.querySelector(this._trashButtonSelector);
    trashButton.addEventListener(`click`, () => this._handleDeleteCard());
  }

  _setData() {
    // Переменные для карточки
    const title = this._newCard.querySelector(this._titleSelector);
    const cardImage = this._newCard.querySelector(this._imageSelector);

    title.textContent = this._name;

    cardImage.src = this._link;
    cardImage.alt = `Место: ` + this._name;
  }

  getView() {
    this._newCard = this._getTemplateCard();
    this._setEventListeners();
    this._setData();

    return this._newCard;
  }
}

export default Card;
