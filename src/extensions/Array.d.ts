interface Array<T> {
	find: (callback: (value: T, index: number, array: T[]) => boolean, thisArg?: any) => T;
    findIndex: (callback: (value: T, index: number, array: T[]) => boolean, thisArg?: any) => number;
    includes: (searchElement: T, fromIndex?: number) => boolean;
}