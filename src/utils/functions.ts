// interface IGroupSame<T> {
//     (array: T[]): T[][];
// }

export const compose = (...functions: Function[]) => functions.reduce((accumulator: any, current: any) => (x :any) => accumulator(current(x)));

export const groupSame = (array: any) => {
    let objGroup: any = {};
  
    array.forEach((item: any) => {
        const itemStr = JSON.stringify(item);

        if (objGroup[itemStr]) {
            objGroup[itemStr] = objGroup[itemStr].concat(item);
        } else {
            objGroup[itemStr] = [].concat(item);
        }
    });
    
    return Object.values(objGroup);
};

export const map = (mapperFunc: Function) => (array: any[]) => 
    array.reduce((accumulator: any, current: any) => {
        accumulator.push(mapperFunc(current));
        return accumulator;
    }, []);
