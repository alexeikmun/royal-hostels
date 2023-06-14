// import { atom } from 'nanostores';
import type AuthModel from '../types/auth';
import type PropertyModel from '../types/property';
import { ApiBuilder } from './ApiBuilder';

// Move to global constants
const apiUrl = 'http://localhost:3001';

class AdminApi<T> extends ApiBuilder<T> {
  constructor(entity: string) {
    super(entity);
    this.entity = entity;
  }

  async getPropertiesById(id: number): Promise<PropertyModel[]> {
    const response = await this._request(
      `${apiUrl}/${this.entity}/${id}/properties`,
    );
    return response.data;
  }
}

export const adminApi = new AdminApi<AuthModel>('admin');
