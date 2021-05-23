// import { BASE_URL } from '@config/constant';
const BASE_URL = 'http://localhost:5000/';
import axios, { AxiosRequestConfig } from 'axios';

export class ApiCaller {
  static httpGet = async (url: string) => {
    try {
      const URL = BASE_URL + url;
      const headers = {};
      const method = 'GET';
      const options: AxiosRequestConfig = { headers, method, url: URL };
      const res = await axios(options);
      return res.data;
    } catch (err) {
      return err;
    }
  };

  static httpPost = async (data: any, url: string) => {
    try {
      const URL = BASE_URL + url;
      const method = 'POST';
      const headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      };
      const options: AxiosRequestConfig = { headers, method, url: URL, data };
      const res = await axios(options);
      return res.data;
    } catch (err) {
      throw err;
    }
  };

  static httpPut = async (payload: any, url: string) => {
    try {
      const URL = BASE_URL + url;
      const method = 'PUT';
      const headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      };
      const data = JSON.stringify(payload);
      const options: AxiosRequestConfig = { method, headers, data };
      const res = await axios.put(URL, options);
      return res.data;
    } catch (err) {
      throw err;
    }
  };

  static httpPostForm = (data: any, url: string) => {
    // const token = localStorage.getItem('token');
    return new Promise((resolve, reject) => {
      const URL = BASE_URL + url;
      fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data;boundary=16384;',
          'Access-Control-Allow-Origin': '*',
        },
        body: data,
      })
        .then((res) => {
          //   const bearer = res.headers.get('Authorization');
          //   localStorage.setItem('token', bearer);
          return res;
        })
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  static httpPatch = (data: any, url: string) => {
    // const token = localStorage.getItem('token');
    return new Promise((resolve, reject) => {
      const URL = BASE_URL + url;
      fetch(URL, {
        method: 'PATCH',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'Content-Type: application/json',
          'Access-Control-Allow-Origin': '*',
          _method: 'PATCH',
        },
        body: JSON.stringify(data),
      })
        .then((res) => {
          // const bearer = res.headers.get('Authorization')
          // localStorage.setItem('token', bearer);
          return res;
        })
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  static httpDelete = async (url: string) => {
    try {
      const URL = BASE_URL + url;
      const headers = {};
      const method = 'DELETE';
      const options: AxiosRequestConfig = { headers, method, url: URL };
      const res = await axios(options);
      return res.data;
    } catch (err) {
      throw err;
    }
  };

  static async uploadImage(formData: any) {
    return axios.post(`${BASE_URL}Fileupload`, formData, {
      // receive two parameter endpoint url ,form data
    });
  }
}
