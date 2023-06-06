// import { atom } from 'nanostores';
import jwt_decode from 'jwt-decode';
import type AuthModel from '../types/auth';
import type UserModel from '../types/user';
import type { TokenUser } from '../types/user';
import { session, loggedUser, initialState } from '../store/authStore';
import { ApiBuilder } from './ApiBuilder';

// Move to global constants
const apiUrl = 'http://localhost:3001';

type DecodedToken = {
  user: TokenUser;
  [key: string]: any;
};

class AuthApi<T> extends ApiBuilder<T> {
  constructor(entity: string) {
    super(entity);
    this.entity = entity;
  }

  async login(item: T): Promise<string> {
    const data = await this._request(`${apiUrl}/${this.entity}/login`, {
      method: 'POST',
      body: item,
      headers: {},
    });

    session.setKey('accessToken', data.data.accessToken);
    session.setKey('refreshToken', data.data.refreshToken);

    // Decode and save user credentials
    const accessToken = data.data.accessToken;
    if (accessToken) {
      const decodedToken: DecodedToken = jwt_decode(accessToken as string);
      loggedUser.set(decodedToken.user);
    } else {
      console.log('could not save user information');
    }

    return data.data;
  }

  async logout(item: T, token: string): Promise<string> {
    let headers = {
      Authorization: 'Bearer ' + token,
    };

    const data = await this._request(`${apiUrl}/${this.entity}/logout`, {
      method: 'POST',
      body: item,
      headers,
    });

    // Clean state and local storage
    session.setKey('accessToken', '');
    session.setKey('refreshToken', '');
    loggedUser.set(initialState);

    return data.data;
  }

  async isAuthenticated(item: T, token: string): Promise<UserModel> {
    let headers = {
      Authorization: 'Bearer ' + token,
    };
    const data = await this._request(
      `${apiUrl}/${this.entity}/is-authenticated`,
      {
        method: 'POST',
        body: item,
        headers,
      },
    );

    return data.data;
  }

  async refresh(token: string): Promise<string> {
    let headers = {
      Authorization: 'Bearer ' + token,
    };
    const data = await this._request(`${apiUrl}/${this.entity}/refresh`, {
      method: 'POST',
      headers,
    });

    return data.data;
  }
}

export const authApi = new AuthApi<AuthModel>('auth');
