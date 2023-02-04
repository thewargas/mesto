export default class Card {
  constructor(
    {
      dataCard,
      configCards,
      handleDeleteCard,
      handlePutLike,
      handleDeleteLike,
      handleCardClick,
    },
    profileInfo
  ) {
    this._configCards = configCards;
    this._dataCard = dataCard;

    this._name = dataCard.name;
    this._link = dataCard.link;
    this._id = dataCard._id;
    this._likes = dataCard.likes;
    this._profileInfo = profileInfo;
    this._owner = dataCard.owner;
    this._ownerCardId = dataCard.owner._id;

    this._likeButtonActive = configCards.likeButtonActive;
    this._templateSelector = configCards.templateSelector;
    this._cardSelector = configCards.cardSelector;

    this._handleDeleteCard = handleDeleteCard;
    this._handleCardClick = handleCardClick;

    this._handlePutLike = handlePutLike;
    this._handleDeleteLike = handleDeleteLike;
  }

  _declarationVariable() {
    this._title = this._newCard.querySelector(this._configCards.titleSelector);
    this._cardImage = this._newCard.querySelector(
      this._configCards.imageSelector
    );

    this._likeButton = this._newCard.querySelector(
      this._configCards.likeButtonSelector
    );
    this._trashButton = this._newCard.querySelector(
      this._configCards.trashButtonSelector
    );

    this._likeCounter = this._newCard.querySelector(
      this._configCards.likeCounterSelector
    );
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
    // Крутая идея, спасибо
    const count = data.likes.length;
    this._likeCounter.textContent = count > 0 ? count : "";
  }

  _putLike() {
    this._likeButton.classList.add(this._likeButtonActive);
  }

  _deleteLike() {
    this._likeButton.classList.remove(this._likeButtonActive);
  }

  _isLiked() {
    if (this._likeButton.classList.contains(this._likeButtonActive)) {
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
      this._trashButton.remove();
      return false;
    }
    return true;
  }

  // Событие переключения лайка
  _handleSwitchLike = () => {
    this._likeButton.classList.toggle(this._likeButtonActive);
  };

  // Установка слушателей
  _setEventListeners() {
    this._likeButton.addEventListener(`click`, () => this._isLiked());
    this._cardImage.addEventListener(`click`, () => {
      this._handleCardClick({
        link: this._link,
        name: this._name,
      });
    });

    if (this._validationUserId()) {
      this._trashButton.addEventListener(`click`, () => {
        this._handleDeleteCard(this._id, this._newCard);
      });
    }
  }

  _setData() {
    this._title.textContent = this._name;
    this._cardImage.src = this._link;
    this._cardImage.alt = `Место: ` + this._name;
    this.countLikes(this._dataCard);
  }

  getView() {
    this._newCard = this._getTemplateCard();
    this._declarationVariable();
    this.switchLike(this._dataCard);
    this._setEventListeners();
    this._setData();

    return this._newCard;
  }
}
