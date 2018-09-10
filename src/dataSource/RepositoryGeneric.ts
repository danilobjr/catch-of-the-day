import { DataCollections } from './DataCollections';
import { Repository } from './Repository';
import { Entity } from './Entity';
import { v1 as generateId } from 'uuid';

export class RepositoryGeneric<T extends Entity> implements Repository<T> {
  private collection: T[] = null;

  constructor(private collectionName: string, private dataCollections: DataCollections) {
    this.collection = dataCollections[collectionName] as T[];
  }

  getAll(): Promise<T[]> {
    return new Promise<T[]>(resolve => resolve(this.collection));
  }

  get(id: string): Promise<T> {
    return new Promise<T>(resolve => resolve(this.collection.find(entity => entity.id === id)));
  }

  add(entity: T): Promise<string> {
    let { dataCollections, collectionName, collection } = this;

    return new Promise<string>(resolve => {
      const id = generateId();
      entity = Object.assign({}, entity, { id }) as T;
      dataCollections[collectionName] = [...collection, entity];
      resolve(id);
    });
  }

  remove(id: string): Promise<void> {
    let { dataCollections, collectionName, collection } = this;
    const index = collection.findIndex(entity => entity.id === id);

    return new Promise<void>(resolve => {
      dataCollections[collectionName] = [
        ...collection.slice(0, index),
        ...collection.slice(index + 1)
      ];

      resolve();
    });
  }

  edit(entity: T): Promise<void> {
    let { dataCollections, collectionName, collection } = this;
    const index = collection.findIndex(e => e.id === entity.id);

    return new Promise<void>(resolve => {
      dataCollections[collectionName] = [
        ...collection.slice(0, index),
        entity,
        ...collection.slice(index + 1)
      ];

      resolve();
    });
  }
}
