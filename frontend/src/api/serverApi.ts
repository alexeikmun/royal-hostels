interface Entity {
  id: number;
}

export class ServerApi<T extends Entity> {
  private baseUrl = 'http://localhost:3001';

  constructor(private entityName: string) {}

  async getAll(): Promise<T[]> {
    const response = await fetch(`${this.baseUrl}/${this.entityName}`);
    const data = await response.json();
    return data as T[];
  }

  async get(id: number): Promise<T> {
    const response = await fetch(`${this.baseUrl}/${this.entityName}/${id}`);
    const data = await response.json();
    return data as T;
  }

  async create(entity: T): Promise<T> {
    const response = await fetch(`${this.baseUrl}/${this.entityName}`, {
      method: 'POST',
      body: JSON.stringify(entity),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    return data as T;
  }

  async update(entity: T): Promise<T> {
    const response = await fetch(
      `${this.baseUrl}/${this.entityName}/${entity.id}`,
      {
        method: 'PUT',
        body: JSON.stringify(entity),
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    const data = await response.json();
    return data as T;
  }

  async delete(id: number): Promise<void> {
    await fetch(`${this.baseUrl}/${this.entityName}/${id}`, {
      method: 'DELETE',
    });
  }
}
