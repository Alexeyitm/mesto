(()=>{"use strict";var e=document.querySelector(".profile__button-edit"),t=document.querySelector(".profile__button-add"),n=document.querySelector(".popup__form_edit"),r=document.querySelector(".popup__form_add"),o=document.querySelector(".profile__name"),i=document.querySelector(".profile__text"),u=document.querySelector(".popup__input_field_name"),c=document.querySelector(".popup__input_field_job"),a=document.querySelector(".popup__input_field_place"),l=document.querySelector(".popup__input_field_link"),p={form:".popup__form",input:".popup__input",buttonAddPopup:".popup__button-add",buttonAddPopupInvalid:"popup__button-add_invalid",buttonAddPopupHover:"popup__button-add_hover",inputInvalid:"popup__input_invalid"};function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d=function(){function e(t,n,r,o){var i=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),f(this,"_setEventListeners",(function(){return i._heartButton=i._cardElement.querySelector(".element__svg-heart"),i._deleteButton=i._cardElement.querySelector(".element__button-delete"),i._pictureButton=i._cardElement.querySelector(".element__img"),i._heartButton.addEventListener("click",(function(){return i._toggleLike()})),i._deleteButton.addEventListener("click",(function(){return i._deleteCard()})),i._pictureButton.addEventListener("click",(function(){return i._handleCardClick(i._place,i._link)})),i._cardElement})),f(this,"_toggleLike",(function(){i._heartButton.classList.toggle("element__svg-heart_active")})),f(this,"_deleteCard",(function(){i._deleteButton.closest(".element").remove()})),f(this,"generateCard",(function(e){return i._cardElement=i._getTemplate(),i._cardElement.querySelector(".element__figcaption").textContent=i._place,i._cardElement.querySelector(".element__img").alt=i._place,i._cardElement.querySelector(".element__img").src=i._link,i._setEventListeners(),i._cardElement})),this._place=t,this._link=n,this._place=t,this._link=n,this._cardSelector=r,this._handleCardClick=o}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".element").cloneNode(!0)}}])&&s(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var y=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._setting=t,this._formElement=n,this._inputList=Array.from(this._formElement.querySelectorAll(t.input)),this._button=this._formElement.querySelector(t.buttonAddPopup)}var t,n;return t=e,(n=[{key:"enableValidation",value:function(){var e=this;this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._handleFormInput(t)}))}))}},{key:"_handleFormInput",value:function(e){this._inputElement=e,this._setCustomError(),this._setFieldError(),this.setSubmitButtonStateActive(),this.setSubmitButtonStateDisabled()}},{key:"_setCustomError",value:function(){this._inputElement.validity.valid?this._inputElement.classList.remove(this._setting.inputInvalid):this._inputElement.classList.add(this._setting.inputInvalid)}},{key:"_setFieldError",value:function(){this._span=document.querySelector("#".concat(this._inputElement.id,"-error")),this._span.textContent=this._inputElement.validationMessage}},{key:"setSubmitButtonStateActive",value:function(){this._formElement.checkValidity()&&(this._button.classList.remove(this._setting.buttonAddPopupInvalid),this._button.removeAttribute("disabled"))}},{key:"setSubmitButtonStateDisabled",value:function(){this._formElement.checkValidity()||(this._button.classList.add(this._setting.buttonAddPopupInvalid),this._button.setAttribute("disabled","disabled"))}},{key:"resetErrors",value:function(){var e=this;this._inputList.forEach((function(t){e._resetInputError(t)}))}},{key:"_resetInputError",value:function(e){document.querySelector("#".concat(e.id,"-error")).textContent="",e.classList.remove(this._setting.inputInvalid)}}])&&_(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t,n){return t&&h(e.prototype,t),n&&h(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var v=b((function e(t,n){var r=this,o=t.initialCards,i=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),m(this,"renderList",(function(){r._items.forEach((function(e){return r._container.prepend(r._renderer(e))}))})),m(this,"addItem",(function(e){r._container.prepend(e)})),this._items=o,this._renderer=i,this._container=document.querySelector(n)}));function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var E=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupSelector=t,this._popup=document.querySelector(this._popupSelector),this._buttonCloseUser=this._popup.querySelector(".popup__button-close"),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("click",(function(t){(t.target===t.currentTarget||t.target.classList.contains("popup__button-close"))&&e.close()}))}}])&&g(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function w(e){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(e)}function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function S(){return S="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=j(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},S.apply(this,arguments)}function j(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=L(e)););return e}function O(e,t){return O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},O(e,t)}function P(e,t){if(t&&("object"===w(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function L(e){return L=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},L(e)}var C=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&O(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=L(r);if(o){var n=L(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return P(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._popupPicture=t._popup.querySelector(".popup__picture"),t._popupFigcaption=t._popup.querySelector(".popup__figcaption"),t}return t=u,(n=[{key:"open",value:function(e,t){this._popupPicture.src=t,this._popupPicture.alt=e,this._popupFigcaption.textContent=e,S(L(u.prototype),"open",this).call(this)}}])&&k(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(E);function q(e){return q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},q(e)}function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function x(e,t){return x=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},x(e,t)}function R(e,t){if(t&&("object"===q(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return B(e)}function B(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function T(){return T="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=A(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},T.apply(this,arguments)}function A(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=V(e)););return e}function V(e){return V=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},V(e)}function D(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var F=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&x(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=V(r);if(o){var n=V(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return R(this,e)});function u(e,t){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),D(B(o=i.call(this,e)),"setEventListeners",(function(){T((n=B(o),V(u.prototype)),"setEventListeners",n).call(n),o._popup.querySelector(".popup__form").addEventListener("submit",(function(e){e.preventDefault(),o._submitPopup(o._getInputValues())}))})),D(B(o),"close",(function(){T((r=B(o),V(u.prototype)),"close",r).call(r),o._popup.querySelector(".popup__form").reset()})),o._inputList=o._popup.querySelectorAll(".popup__input"),o._submitPopup=t,o}return t=u,(n=[{key:"_getInputValues",value:function(){var e=this;return this._formInputValues={},this._inputList.forEach((function(t){return e._formInputValues[t.name]=t.value})),this._formInputValues}}])&&I(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(E);function U(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var N=function(){function e(t){var n=t.name,r=t.job;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=document.querySelector(n).textContent,this._job=document.querySelector(r).textContent}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._name,job:this._job}}},{key:"setUserInfo",value:function(e){u.value=e.name,c.value=e.job}}])&&U(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function z(e,t){return new d(e,t,".element-template",(function(){H.open(e,t)})).generateCard()}var H=new C(".popup_image"),J=new F(".popup_user",(function(e){o.textContent=e.Name,i.textContent=e.Job,J.close()})),M=new F(".popup_card",(function(){G.addItem(z(a.value,l.value)),M.close()})),G=new v({initialCards:[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],renderer:function(e){return z(e.name,e.link)}},".elements__list"),K=new y(p,n),Q=new y(p,r);H.setEventListeners(),J.setEventListeners(),M.setEventListeners(),G.renderList(),K.enableValidation(),Q.enableValidation(),e.addEventListener("click",(function(){var e=new N({name:".profile__name",job:".profile__text"});e.setUserInfo(e.getUserInfo()),J.open(),K.resetErrors()})),t.addEventListener("click",(function(){Q.setSubmitButtonStateDisabled(),M.open(),Q.resetErrors()}))})();