let editProfile = document.querySelector(`.profile__edit-button`);
let popup = document.querySelector(`.popup`);

let nameInput = document.querySelector(`.popup__input_type_name`);
let jobInput = document.querySelector(`.popup__input_type_job`);

let nameTitle = document.querySelector(`.profile__title`);
let jobTitle = document.querySelector(`.profile__subtitle`);

let closePopup = document.querySelector(`.popup__close-button`);

let submitEdit = document.querySelector(`.popup__form`);

let likeElements = document.querySelectorAll(`.element__like-button`);

function popupOpen() {
  popup.classList.remove(`popup_closed`);
  nameInput.value = nameTitle.textContent;
  jobInput.value = jobTitle.textContent;
}
function popupClose() {
  popup.classList.add(`popup_closed`);
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  nameTitle.textContent = nameInput.value;
  jobTitle.textContent = jobInput.value;

  popupClose();
}

editProfile.addEventListener(`click`, popupOpen);
closePopup.addEventListener(`click`, popupClose);
submitEdit.addEventListener(`submit`, formSubmitHandler);
for (let i = 0; i < likeElements.length; i++) {
  likeElements[i].addEventListener(`click`, function () {
    likeElements[i].classList.toggle(`element__like-button_active`);
  });
}
