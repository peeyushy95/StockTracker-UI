import Cookies from "universal-cookie";
import {DEFAULT_CONSTANTS} from '../config/configInterface';
class CookieHandler {

  constructor() {
    this._cookie = new Cookies();
    this._cookieOptions = {path: '/', maxAge: 36000};
  }

  setCookie = (key, val) => {
    this._cookie.set(key, val, this._cookieOptions);
  };

  getCookie = (key) => (
    this._cookie.get(key)
  );

  removeCookie = (key) => {
    this._cookie.remove(key);
  };

  removeUserInfoCookie = () => {
    this.removeCookie(DEFAULT_CONSTANTS.COOKIES_KEY.AUTH_TOKEN);
    this.removeCookie(DEFAULT_CONSTANTS.COOKIES_KEY.USER_EMAIL);
  }
}

export default new CookieHandler();
