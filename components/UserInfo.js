export default class UserInfo {
  constructor(nameInput, jobInput) {
    this._nameInput = document.querySelector(nameInput);
    this._jobInput = document.querySelector(jobInput);
  }

  getUserInfo() {
    return {
      name: this._nameInput,
      job: this._jobInput,
    };
  }

  setUserInfo(inputs) {
    this._nameInput.textContent = inputs.name;
    this._jobInput.textContent = inputs.job;
  }
}
