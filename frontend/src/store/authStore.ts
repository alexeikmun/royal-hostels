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

export const loggedUser = persistentAtom<TokenUser | {}>(
  'session:user',
  {},
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
