import { atom } from 'nanostores';

export const authStore = atom({
  accessToken: '',
  refreshToken: '',
});
