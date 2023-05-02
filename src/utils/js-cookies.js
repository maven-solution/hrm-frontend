import Cookies from "js-cookie";

export const authCookieKey = "access_token";
export const unsetAuthCookie = () => Cookies.remove(authCookieKey);
export const getAuthCookie = () => Cookies.get(authCookieKey);
