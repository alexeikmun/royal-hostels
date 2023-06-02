import { atom } from 'nanostores';

type Search = {
  dates: {
    start: Date;
    end: Date;
  };
  guests: number;
  location: string;
};

export const $search = atom<Search[]>([]);

export function addUser(user: Search) {
  $search.set([...$search.get(), user]);
}
