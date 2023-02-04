export default class UserInfo {
  constructor(nameLine, jobLine, avatar) {
    this._nameLine = document.querySelector(nameLine);
    this._jobLine = document.querySelector(jobLine);
    this._avatar = document.querySelector(avatar);
  }

  getUserInfo() {
    return {
      name: this._nameLine,
      about: this._jobLine,
    };
  }

  setUserInfo(entryInfo) {
    this._nameLine.textContent = entryInfo.name;
    this._jobLine.textContent = entryInfo.about;
    this._userId = entryInfo._id;
  }

  setAvatar(entryInfo) {
    this._avatar.src = entryInfo.avatar;
  }

  getUserId() {
    return this._userId;
  }
}
