export interface IRepository<T> {
    getAll: () => T[];
    get: (id: string) => T;
    add: (entity: T) => void;
    remove: (id: string) => void;
    edit: (entity: T) => void;
}