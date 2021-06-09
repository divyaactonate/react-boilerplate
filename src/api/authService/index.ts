import { Fetch } from '@utils/fetch';
import { API_URL } from '@config/constants';
import { Logger } from '@utils/logger';

class AuthService {
  public static async signup(signupParams: any) {
    try {
      const res = await Fetch.fetch.post(`${API_URL}/auth/signup`, {
        ...signupParams,
      });
      Logger.debug('AuthService.signup() ', res);
      return res;
    } catch (err) {
      Logger.error('AuthService.signup() ', err);
      throw err;
    }
  }
  public static async signin(email: string, password: string) {
    try {
      // const res = await Fetch.fetch.post(`${API_URL}/auth/signin`, {
      //   email,
      //   password,
      // })
      Logger.debug('auth token ', email, password);
      // Logger.debug('auth token ', res)
      // // Fetch.fetch.defaults.headers.common['Authorization'] = res.headers.authorization;
      // Logger.debug('AuthService.siginin() ', res)
      // return res
      return true;
    } catch (err) {
      Logger.error('AuthService.signin() ', err);
      throw err;
    }
  }
  public static async signout() {
    try {
      const res = await Fetch.fetch.post(`${API_URL}/auth/signout`);
      // Fetch.fetch.defaults.headers.common['Authorization'] = '';
      Logger.debug('AuthService.signout() ', res);
      return res;
    } catch (err) {
      Logger.error('AuthService.signout() ', err);
      throw err;
    }
  }
  public static async isAuthenticated() {
    try {
      const res = await Fetch.fetch.get(`${API_URL}/auth/authenticate`);
      Logger.debug('AuthService.isAuthenticated() ', res);
      return res;
    } catch (err) {
      Logger.error('AuthService.isAuthenticated() ', err);
      throw err;
    }
  }
  public static async getUser() {
    try {
      const res = await Fetch.fetch.post(`${API_URL}/auth/user`);
      Logger.debug('AuthService.getUser() ', res);
      return res;
    } catch (err) {
      Logger.error('AuthService.getUser() ', err);
      throw err;
    }
  }
  public static async forgotPassword(email: string) {
    try {
      const res = await Fetch.fetch.post(`${API_URL}/auth/forgotpassword`, {
        email,
      });
      Logger.debug('AuthService.forgotPassword() ', res);
      return res;
    } catch (err) {
      Logger.error('AuthService.forgotPassword() ', err);
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
      Logger.debug('AuthService.resetPassword() ', res);
      return res;
    } catch (err) {
      Logger.error('AuthService.resetPassword() ', err);
      throw err;
    }
  }
}
export { AuthService };
