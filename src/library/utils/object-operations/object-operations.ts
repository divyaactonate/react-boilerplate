import { Dict } from '../types';

type FilterFn<T> = (value: any, key: string, object: T) => boolean;

/**
 * Returns the items of an object that meet the condition specified in a callback function.
 *
 * @param object the object to loop through
 * @param fn The filter function
 */
export function objectFilter<T extends Dict>(object: T, fn: FilterFn<T>) {
  const result: Dict = {};

  Object.keys(object).forEach((key) => {
    const value = object[key];
    const shouldPass = fn(value, key, object);
    if (shouldPass) {
      result[key] = value;
    }
  });

  return result;
}

export const filterUndefined = (object: Dict) =>
  objectFilter(object, (val) => val !== null && val !== undefined);

export const objectKeys = <T extends Dict>(obj: T) => Object.keys(obj) as unknown as (keyof T)[];

/**
 * Object.entries polyfill for Nodev10 compatibility
 */
export const fromEntries = <T extends unknown>(entries: [string, any][]) =>
  entries.reduce((carry, [key, value]) => {
    carry[key] = value;
    return carry;
  }, {}) as T;
