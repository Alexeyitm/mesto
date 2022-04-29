import { nameInput, jobInput } from '../utils/constants.js';

export default class UserInfo {
  constructor(obj) {
    this._name = document.querySelector(obj.name).textContent;
    this._job = document.querySelector(obj.job).textContent;
  }

  getUserInfo() {
    return {name: this._name, job: this._job}
  }

  setUserInfo() {
    const obj = this.getUserInfo();
    nameInput.value = obj.name;
    jobInput.value = obj.job;
  }
}