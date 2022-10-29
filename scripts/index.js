let editProfile = document.querySelector(".profile__edit-button");
let popup = document.querySelector(".popup");

let nameInput = document.querySelector("#nameinput");
let jobInput = document.querySelector("#jobinput");

let nameTitle = document.querySelector(".profile__title");
let jobTitle = document.querySelector(".profile__subtitle");

editProfile.addEventListener("click", function () {
  popup.classList.remove("popup_closed");
  nameInput.value = nameTitle.textContent;
  jobInput.value = jobTitle.textContent;
});

let closePopup = document.querySelector(".popup__close-button");
closePopup.addEventListener("click", function () {
  popup.classList.add("popup_closed");
});

let submitEdit = document.querySelector(".popup__form");
function formSubmitHandler(evt) {
  evt.preventDefault();
  nameTitle.textContent = nameInput.value;
  jobTitle.textContent = jobInput.value;

  popup.classList.add("popup_closed");
}
submitEdit.addEventListener("submit", formSubmitHandler);

let likeElements = document.querySelectorAll(".element__like-button");
for (let i = 0; i < likeElements.length; i++) {
  likeElements[i].addEventListener("click", function () {
    likeElements[i].classList.toggle("element__like-button_active");
  });
}
