import { Fetch } from '@utils/fetch';
import { API_URL } from '@config/constants';
import { Logger } from '@libs/logger';

class AuthApi {
  public static async signup(signupParams: any) {
    try {
      const res = await Fetch.fetch.post(`${API_URL}/auth/signup`, {
        ...signupParams,
      });
      Logger.debug('AuthApi.signup() ', res);
      return res;
    } catch (err) {
      Logger.error('AuthApi.signup() ', err);
      throw err;
    }
  }
  public static async signin(email: string, password: string) {
    try {
      // const res = await Fetch.fetch.post(`${API_URL}/auth/signin`, {
      //   email,
      //   password,
      // })
      // Logger.debug('auth token ', res)
      // // Fetch.fetch.defaults.headers.common['Authorization'] = res.headers.authorization;
      // Logger.debug('AuthApi.siginin() ', res)
      // return res
      return true;
    } catch (err) {
      Logger.error('AuthApi.signin() ', err);
      throw err;
    }
  }
  public static async signout() {
    try {
      const res = await Fetch.fetch.post(`${API_URL}/auth/signout`);
      // Fetch.fetch.defaults.headers.common['Authorization'] = '';
      Logger.debug('AuthApi.signout() ', res);
      return res;
    } catch (err) {
      Logger.error('AuthApi.signout() ', err);
      throw err;
    }
  }
  public static async isAuthenticated() {
    try {
      const res = await Fetch.fetch.get(`${API_URL}/auth/authenticate`);
      Logger.debug('AuthApi.isAuthenticated() ', res);
      return res;
    } catch (err) {
      Logger.error('AuthApi.isAuthenticated() ', err);
      throw err;
    }
  }
  public static async getUser() {
    try {
      const res = await Fetch.fetch.post(`${API_URL}/auth/user`);
      Logger.debug('AuthApi.getUser() ', res);
      return res;
    } catch (err) {
      Logger.error('AuthApi.getUser() ', err);
      throw err;
    }
  }
  public static async forgotPassword(email: string) {
    try {
      const res = await Fetch.fetch.post(`${API_URL}/auth/forgotpassword`, {
        email,
      });
      Logger.debug('AuthApi.forgotPassword() ', res);
      return res;
    } catch (err) {
      Logger.error('AuthApi.forgotPassword() ', err);
      throw err;
    }
  }
  public static async resetPassword(email: string, token: string, password: string) {
    try {
      const res = await Fetch.fetch.post(`${API_URL}/auth/resetpassword`, {
        email,
        token,
        password,
      });
      Logger.debug('AuthApi.resetPassword() ', res);
      return res;
    } catch (err) {
      Logger.error('AuthApi.resetPassword() ', err);
      throw err;
    }
  }
}
export { AuthApi };
