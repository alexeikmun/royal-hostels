import { persistentMap, persistentAtom } from '@nanostores/persistent';
import type { TokenUser } from '../types/user';

export type TokensValue = {
  accessToken: string;
  refreshToken: string;
};

export const session = persistentMap<TokensValue>('session:', {
  accessToken: '',
  refreshToken: '',
});

export const initialState = {
  address: '',
  birthday: '',
  city: '',
  country: '',
  createdAt: '',
  email: '',
  hashRefreshToken: '',
  id: 0,
  lastLogin: '',
  name: '',
  password: '',
  phone: '',
  role: '',
  updatedAt: '',
  zipcode: '',
};

export const loggedUser = persistentAtom<TokenUser>(
  'session:user',
  initialState,
  {
    encode(value) {
      return JSON.stringify(value);
    },
    decode(value) {
      try {
        return JSON.parse(value);
      } catch (err) {
        return value;
      }
    },
  },
);
