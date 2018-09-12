export const compose = (...functions: Function[]) =>
  functions.reduce((accumulator: any, current: any) =>
    (x: any) => accumulator(current(x))
  );

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

export const head = (array: any[]) => array[0];

export const prop = (propName: string) => (obj: { [key: string]: any }) =>
  propName
    .split('.')
    .reduce((accu, curr) => {
      accu = accu[curr]; return accu;
    }, obj);

export const toInt = (value: string) => parseInt(value, 10);

export const equals = (a: any) => (b: any) => a === b;

export const defaultTo = (defaultValue: any) => (value: any) =>
  value || defaultValue;
