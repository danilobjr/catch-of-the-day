export type Repository<T> = {
  getAll: () => Promise<T[]>;
  get: (id: string) => Promise<T>;
  add: (entity: T) => Promise<string>;
  remove: (id: string) => Promise<void>;
  edit: (entity: T) => Promise<void>;
};
