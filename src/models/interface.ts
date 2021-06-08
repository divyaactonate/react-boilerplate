import { RegisterOptions } from 'react-hook-form';

export interface Validation {
  [x: string]: {
    name?: string;
    validation: RegisterOptions;
  };
}
// export interface Validation {
//   [x: string]: RegisterOptions;
// }
