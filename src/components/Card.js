export default class Card {
  constructor(
    {
      dataCard,
      configCards,
      handleDeleteCard,
      handlePutLike,
      handleDeleteLike,
    },
    handleCardClick,
    popupWithDeleteCard,
    profileInfo
  ) {
    this._dataCard = dataCard;
    this._name = dataCard.name;
    this._link = dataCard.link;
    this._id = dataCard._id;
    this._likes = dataCard.likes;
    this._profileInfo = profileInfo;
    this._owner = dataCard.owner;
    this._ownerCardId = dataCard.owner._id;

    this._imageSelector = configCards.imageSelector;
    this._titleSelector = configCards.titleSelector;
    this._likeButtonSelector = configCards.likeButtonSelector;
    this._likeButtonActive = configCards.likeButtonActive;
    this._likeCounterSelector = configCards.likeCounterSelector;
    this._likeCounterDisabled = configCards.likeCounterDisabled;
    this._trashButtonSelector = configCards.trashButtonSelector;
    this._templateSelector = configCards.templateSelector;
    this._cardSelector = configCards.cardSelector;

    this._handleDeleteCard = handleDeleteCard;
    this._handleCardClick = handleCardClick;
    this._popupWithDeleteCard = popupWithDeleteCard;

    this._handlePutLike = handlePutLike;
    this._handleDeleteLike = handleDeleteLike;
  }

  switchLike(data) {
    if (
      data.likes.some((user) => {
        return user._id === this._profileInfo.getUserId();
      })
    ) {
      this._putLike();
    } else {
      this._deleteLike();
    }
  }

  countLikes(data) {
    let ch = 0;
    if (data.likes.length > 0) {
      this._newCard.querySelector(this._likeCounterSelector).textContent =
        data.likes.length;
      if ((ch = 1)) {
        this._newCard
          .querySelector(this._likeCounterSelector)
          .classList.remove(this._likeCounterDisabled);
        ch = 0;
      }
    } else {
      this._newCard
        .querySelector(this._likeCounterSelector)
        .classList.add(this._likeCounterDisabled);
      ch = 1;
    }
  }

  _putLike() {
    this._newCard
      .querySelector(this._likeButtonSelector)
      .classList.add(this._likeButtonActive);
  }

  _deleteLike() {
    this._newCard
      .querySelector(this._likeButtonSelector)
      .classList.remove(this._likeButtonActive);
  }

  _isLiked() {
    if (
      this._newCard
        .querySelector(this._likeButtonSelector)
        .classList.contains(this._likeButtonActive)
    ) {
      this._handleDeleteLike(this._id);
    } else {
      this._handlePutLike(this._id);
    }
  }

  _getTemplateCard() {
    const card = document
      .querySelector(this._templateSelector)
      .content.querySelector(this._cardSelector)
      .cloneNode(true);

    return card;
  }

  _validationUserId() {
    if (this._ownerCardId !== this._profileInfo.getUserId()) {
      this._newCard.querySelector(this._trashButtonSelector).remove();
      return false;
    }
    return true;
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
    likeButton.addEventListener(`click`, () => this._isLiked());

    const cardImage = this._newCard.querySelector(this._imageSelector);
    cardImage.addEventListener(`click`, () => {
      this._handleCardClick.open({
        link: this._link,
        name: this._name,
      });
    });

    if (this._validationUserId()) {
      const trashButton = this._newCard.querySelector(
        this._trashButtonSelector
      );
      trashButton.addEventListener(`click`, () =>
        this._popupWithDeleteCard.open(() => {
          this._handleDeleteCard(this._id);
          this._newCard.remove();
          this._newCard = null;
        })
      );
    }
  }

  _setData() {
    // Переменные для карточки
    const title = this._newCard.querySelector(this._titleSelector);
    const cardImage = this._newCard.querySelector(this._imageSelector);
    const likes = this._newCard.querySelector(this._likeCounterSelector);

    title.textContent = this._name;

    cardImage.src = this._link;
    cardImage.alt = `Место: ` + this._name;

    likes.textContent = this._likes.length;
  }

  getView() {
    this._newCard = this._getTemplateCard();
    this.switchLike(this._dataCard);
    this.countLikes(this._dataCard);
    this._setEventListeners();
    this._setData();

    return this._newCard;
  }
}
