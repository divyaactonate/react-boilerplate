import { getBorderWidthValue } from './get-border-width-value';

describe('@utils/get-border-width-value', () => {
  it('must give', () => {
    expect(getBorderWidthValue()).toBe(null);
  });
});
