import { atom } from 'nanostores';
import type Property from '../types/property';

const apiUrl = 'http://localhost:3001';

// Todos:
// try-catch blocks
// shared error handling
// type responses

class ApiBuilder<T> {
  entity: string;
  dataStore: any;

  constructor(entity: string) {
    this.entity = entity;
    this.dataStore = atom([]);
  }

  async getAll(): Promise<T[]> {
    const cachedData = this.dataStore.get();

    if (cachedData.length) {
      return cachedData;
    }

    const response = await fetch(`${apiUrl}/${this.entity}`);
    const data = await response.json();

    this.dataStore.set(data.data);
    return data.data;
  }

  async getById(id: number): Promise<T> {
    const cachedData = this.dataStore.get();

    const cachedItem = cachedData.find((item: any) => item.id === id);

    if (cachedItem) {
      return cachedItem;
    }

    const response = await fetch(`${apiUrl}/${this.entity}/${id}`);
    const data = await response.json();
    this.dataStore.set([...cachedData, data]);
    return data;
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
    const response = await fetch(`${apiUrl}/${this.entity}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(item),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    const updatedData = this.dataStore.get().map((d: any) => {
      if (d.id === id) {
        return data;
      } else {
        return d;
      }
    });

    this.dataStore.set(updatedData);
    return data;
  }

  async delete(id: number): Promise<void> {
    await fetch(`${apiUrl}/${this.entity}/${id}`, {
      method: 'DELETE',
    });

    const updatedData = this.dataStore.get().filter((d: any) => d.id !== id);

    this.dataStore.set(updatedData);
  }
}

export const propertyApi = new ApiBuilder<Property>('property');
