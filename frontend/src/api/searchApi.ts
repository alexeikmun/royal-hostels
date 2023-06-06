import { ApiBuilder } from './ApiBuilder';

// Move to global constants
const apiUrl = 'http://localhost:3001';

type SearchedProperty = {
  id: number;
  name: string;
  city: string;
  country: string;
  price: string;
  rate: string;
  image: string;
};

class SearchApi<T> extends ApiBuilder<T> {
  constructor(entity: string) {
    super(entity);
    this.entity = entity;
  }

  async searchLocations(params?: URLSearchParams): Promise<T[]> {
    const data = await this._request(
      `${apiUrl}/${this.entity}/locations`,
      { method: 'GET' },
      params,
    );

    return data.data;
  }

  async searchHostels(params?: URLSearchParams): Promise<T[]> {
    const data = await this._request(
      `${apiUrl}/${this.entity}/hostels`,
      { method: 'GET' },
      params,
    );

    return data.data;
  }
}

export const searchApi = new SearchApi<SearchedProperty>('search');
