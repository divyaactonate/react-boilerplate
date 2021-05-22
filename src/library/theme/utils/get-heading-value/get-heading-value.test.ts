import { getHeadingValue } from './get-heading-value';

describe('@utils/get-heading-value', () => {
  it('must give', () => {
    expect(getHeadingValue()).toBe(null);
  });
});
