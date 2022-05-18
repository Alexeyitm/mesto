import { nameInput, jobInput } from '../utils/constants.js';

export default class UserInfo {
  constructor({name, job, avatar}) {
    this._name = document.querySelector(name);
    this._job = document.querySelector(job);
    this._avatar = document.querySelector(avatar);
    this._id;
  }

  getUserInfo() {
    return { name: this._name.textContent, job: this._job.textContent }
  }

  getUserId() {
    return this._id
  }

  setUserInfo(newValues) {
    nameInput.value = newValues.name;
    jobInput.value = newValues.job;
  }

  setUserAvatar(link) {
    this._avatar.src = link;
  }

  setUserId(id) {
    this._id = id;
  }
}