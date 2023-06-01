// import { atom } from 'nanostores';
import jwt_decode from 'jwt-decode';
import type AuthModel from '../types/auth';
import type UserModel from '../types/user';
import type { TokenUser } from '../types/user';
import { session, loggedUser } from '../store/authStore';

// Move to global constants
const apiUrl = 'http://localhost:3001';

type RequestOptions = {
  method: 'POST' | 'GET' | 'PUT' | 'DELETE';
  body?: any;
  headers?: {
    [key: string]: string;
  };
};

type DecodedToken = {
  user: TokenUser;
  [key: string]: any;
};

class ApiBuilder<T> {
  entity: string;

  constructor(entity: string) {
    this.entity = entity;
  }

  private async request(url: string, options: RequestOptions): Promise<any> {
    // console.log('headers', options.headers);
    try {
      const response = await fetch(url, {
        method: options.method,
        body: JSON.stringify(options.body),
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
      });

      return this.handleResponse(response);
    } catch (error) {
      if (error instanceof Error) {
        console.log('Error Message: ', error.message);
        return error.message;
      } else {
        console.log('unexpected error: ', error);
        return 'An unexpected error occurred';
      }
    }
  }

  private handleResponse(response: Response): Promise<any> {
    if (response.status === 401) {
      throw new Error('Unauthorized');
    }
    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }

    const result = response.json();

    return result;
  }

  async login(item: T): Promise<string> {
    const data = await this.request(`${apiUrl}/${this.entity}/login`, {
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

    const data = await this.request(`${apiUrl}/${this.entity}/logout`, {
      method: 'POST',
      body: item,
      headers,
    });

    // Clean state and local storage
    session.setKey('accessToken', '');
    session.setKey('refreshToken', '');
    loggedUser.set({});

    return data.data;
  }

  async isAuthenticated(item: T, token: string): Promise<UserModel> {
    let headers = {
      Authorization: 'Bearer ' + token,
    };
    const data = await this.request(
      `${apiUrl}/${this.entity}/is-authenticated`,
      {
        method: 'POST',
        body: item,
        headers,
      },
    );
    // console.log('user', data.data.user);
    return data.data.user;
  }

  async refresh(token: string): Promise<string> {
    let headers = {
      Authorization: 'Bearer ' + token,
    };
    const data = await this.request(`${apiUrl}/${this.entity}/refresh`, {
      method: 'POST',
      headers,
    });

    return data.data;
  }
}

export const AuthApi = new ApiBuilder<AuthModel>('auth');
