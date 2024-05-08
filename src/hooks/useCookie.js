import cookie from 'js-cookie';
import { jwtDecode } from "jwt-decode";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsImlhdCI6MTcxNTE1OTYwOCwiZXhwIjoxNzE3NzUxNjA4fQ.yubR8HETuvJHcvruqXdUBb-e1qsW6PYjNx5ROhGZ4fk";
const decoded = jwtDecode(token);




const AUTH_KEY = 'jobplus-token';


export const useCookie = () => {
    //saveAuthCookie
    const saveAuthCookie = (token, expires=4/24) => {
      cookie.set(AUTH_KEY, token, { expires: expires }); //expires in 4 hourse
    };

    //deleteAuthCookie
    const deleteAuthCookie = () => {
      cookie.remove(AUTH_KEY);
    };

    //getAuthCookie
    const getAuthCookie = () => {
      return cookie.get(AUTH_KEY);
    };

    //isAuthCookieExpired
    const isAuthCookieExpired = () => {
      const token = getAuthCookie();
      if (!token) return true;
      const { exp } = jwtDecode(token);
      const currentTime = Date.now() / 1000; //to get in milliseconds
      return exp < currentTime;
    };

    //hasValidAuthCookie
    const hasValidAuthCookie = () =>{
      return !isAuthCookieExpired();
    };

    return {
      saveAuthCookie,
      deleteAuthCookie,
      getAuthCookie,
      isAuthCookieExpired,
      hasValidAuthCookie,
    };
};