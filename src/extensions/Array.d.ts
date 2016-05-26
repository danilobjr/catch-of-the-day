interface Array<T> {
	find: (callback: (value: T, index: number, array: T[]) => boolean, thisArg?: any) => T;
    findIndex: (callback: (value: T, index: number, array: T[]) => boolean, thisArg?: any) => number;
}