import { camelCaseAll } from '../camel-case-all/camel-case-all';
import { lowerAll } from '../lower-all/lower-all';
import { upperAll } from '../upper-all/upper-all';
import { upperFirst } from '../upper-first/upper-first';

export const textTransform = (textCase: string, text: string) => {
  switch (textCase) {
    case 'uppercase':
      return upperAll(text);
    case 'lowercase':
      return lowerAll(text);
    case 'capitalize':
      return upperFirst(text);
    case 'camelCase':
      return camelCaseAll(text);
    default:
      return text;
  }
};
