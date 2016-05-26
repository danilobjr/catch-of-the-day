import { IDataCollections } from './IDataCollections';
import { IRepository } from './IRepository';
import { IEntity } from './IEntity';

export class RepositoryGeneric<T extends IEntity> implements IRepository<T> {
    private collection: T[] = null;
    
    constructor(private collectionName: string, private dataCollections: IDataCollections) {
        this.collection = dataCollections[collectionName] as T[];
    }
    
    getAll(): T[] {        
        return this.collection;
    }
    
    get(id: string): T {
        return this.collection.find(entity => entity.id === id);
    }
    
    add(entity: T): void {
        let { dataCollections, collectionName, collection } = this;
        
        dataCollections[collectionName] = [...collection, entity];
    }
    
    remove(id: string): void {
        let { dataCollections, collectionName, collection } = this;
        const index = collection.findIndex(entity => entity.id === id);
        
        dataCollections[collectionName] = [
            ...collection.slice(0, index),
            ...collection.slice(index + 1)
        ];
    }
    
    edit(entity: T): void {
        let { dataCollections, collectionName, collection } = this;
        const index = collection.findIndex(e => e.id === entity.id);
        
        dataCollections[collectionName] = [
            ...collection.slice(0, index),
            entity,
            ...collection.slice(index + 1)
        ];
    }
}