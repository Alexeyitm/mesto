import { nameInput, jobInput } from '../utils/constants.js';

export default class UserInfo {
  constructor({name, job}) {
    this._name = document.querySelector(name).textContent;
    this._job = document.querySelector(job).textContent;
  }

  getUserInfo() {
    return {name: this._name, job: this._job}
  }

  setUserInfo(newValues) {
    nameInput.value = newValues.name;
    jobInput.value = newValues.job;
  }
}