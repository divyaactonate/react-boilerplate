export type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;
export type Dict<T = any> = Record<string, T>;
export type EventKeys =
  | 'ArrowDown'
  | 'ArrowUp'
  | 'ArrowLeft'
  | 'ArrowRight'
  | 'Enter'
  | 'Space'
  | 'Tab'
  | 'Backspace'
  | 'Control'
  | 'Meta'
  | 'Home'
  | 'End'
  | 'PageDown'
  | 'PageUp'
  | 'Delete'
  | 'Escape'
  | ' '
  | 'Shift';

export type Booleanish = boolean | 'true' | 'false';
export type StringOrNumber = string | number;
export type AnyFunction<T = any> = (...args: T[]) => any;
