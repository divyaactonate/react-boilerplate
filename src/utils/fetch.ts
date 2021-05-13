import axios from 'axios';
import { API_URL } from '@config/constants';
// import { set } from "lodash";

export class Fetch {
  private static _fetch = Fetch.fetchBuilder();
  // private static _token = ''

  // public static setToken(token: string) {
  //   Fetch._token = token
  // }

  // loads token from cookie
  public static loadToken() {
    // TODO: implement me
  }

  public static get fetch() {
    return Fetch._fetch;
  }

  public static fetchBuilder(config: any = {}) {
    const _c = {
      baseURL: config.baseURL || API_URL,
      timeout: config.timeout || 15000,
      crossDomain: true,
      withCredentials: true,
      ...config,
    };

    return axios.create(_c);
  }
}

// // Add a request interceptor
// axios.interceptors.request.use(function (config) {
//   console.log('axios.interceptors yahoo ');

//   // Do something before request is sent
//   if(AUTH_TOKEN) {
//     config.headers.Authorization = AUTH_TOKEN;
//   }
//   return config;
// }, function (error) {
//   // Do something with request error
//   console.log('axios.interceptors error ', error);
//   return Promise.reject(error);
// });

// let AUTH_TOKEN = '';

// export function setAuthToken(token: string = '') {
//   AUTH_TOKEN = token;
//   // axios.defaults.headers.common['Authorization'] = token;
// }

// export function fetchBuilder(config: any = {}) {
//   const _c = {
//     baseURL: config.baseURL || Constants.API_URL,
//     timeout: config.timeout || 15000,
//     ...config
//   };

//   return axios.create(_c);
// }

// const _fetch = fetchBuilder();

// export const fetch = _fetch;
