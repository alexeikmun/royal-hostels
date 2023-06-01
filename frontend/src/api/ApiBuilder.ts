import { atom } from 'nanostores';
import type Property from '../types/property';

const apiUrl = 'http://localhost:3001';

export type RequestOptions = {
  method: 'POST' | 'GET' | 'PUT' | 'DELETE';
  body?: any;
  headers?: {
    [key: string]: string;
  };
};

// Parent API class with request method and error handling
export class ApiBuilder<T> {
  entity: string;

  constructor(entity: string) {
    this.entity = entity;
  }

  handleResponse(response: Response): Promise<any> {
    if (response.status === 401) {
      throw new Error('Unauthorized');
    }
    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }

    const result = response.json();

    return result;
  }

  async _request(url: string, options?: RequestOptions): Promise<any> {
    // console.log('headers', options.headers);
    const opts = {
      method: options?.method,
      body: JSON.stringify(options?.body),
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
    };
    try {
      const response = await fetch(url, opts);

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
}

// Class builder for CRUD type endpoints
class CrudApiBuilder<T> extends ApiBuilder<T> {
  entity: string;
  dataStore: any;

  constructor(entity: string) {
    super(entity);
    this.entity = entity;
    this.dataStore = atom([]);
  }

  async getAll(): Promise<T[]> {
    const cachedData = this.dataStore.get();

    if (cachedData.length) {
      return cachedData;
    }

    const response = await this._request(`${apiUrl}/${this.entity}`);

    this.dataStore.set(response.data);
    return response.data;
  }

  async getById(id: number): Promise<T> {
    const cachedData = this.dataStore.get();

    const cachedItem = cachedData.find((item: any) => item.id === id);

    if (cachedItem) {
      return cachedItem;
    }

    const response = await this._request(`${apiUrl}/${this.entity}/${id}`);

    this.dataStore.set([...cachedData, response]);
    return response;
  }

  async create(item: T): Promise<T> {
    const response = await fetch(`${apiUrl}/${this.entity}`, {
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    this.dataStore.set([...this.dataStore.get(), data]);
    return data;
  }

  async update(id: number, item: T): Promise<T> {
    const response = await this._request(`${apiUrl}/${this.entity}/${id}`, {
      method: 'PUT',
      body: item,
    });

    const updatedData = this.dataStore.get().map((d: any) => {
      if (d.id === id) {
        return response;
      } else {
        return d;
      }
    });

    this.dataStore.set(updatedData);
    return response;
  }

  async delete(id: number): Promise<void> {
    const response = await this._request(`${apiUrl}/${this.entity}/${id}`, {
      method: 'DELETE',
    });

    const updatedData = this.dataStore.get().filter((d: any) => d.id !== id);

    this.dataStore.set(updatedData);
  }
}

// List of API services available (move to individual file?)
export const propertyApi = new CrudApiBuilder<Property>('property');
