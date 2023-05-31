import { persistentMap } from '@nanostores/persistent';

export type TokensValue = {
  accessToken: string;
  refreshToken: string;
};

export const session = persistentMap<TokensValue>('session:', {
  accessToken: 'accessToken',
  refreshToken: 'refreshToken',
});
