import { IDataCollections } from './IDataCollections';
import { IRepository } from './IRepository';
import { IEntity } from './IEntity';
import * as uuid from 'node-uuid';

export class RepositoryGeneric<T extends IEntity> implements IRepository<T> {
    private collection: T[] = null;
    
    constructor(private collectionName: string, private dataCollections: IDataCollections) {
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
            const id = uuid.v1();
            entity.id = id;
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