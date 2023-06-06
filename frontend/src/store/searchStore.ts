import { atom } from 'nanostores';

type Search = {
  location: string;
};

export const $search = atom<Search>({ location: '' });

export function addSearch(user: Search) {
  const saved = $search.get();
  $search.set({ ...saved, location: user.location });
}
