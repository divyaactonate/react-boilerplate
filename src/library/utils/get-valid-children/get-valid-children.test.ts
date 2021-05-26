import { getValidChildren } from './get-valid-children';

describe('@utils/get-valid-children', () => {
  it('must give', () => {
    expect(getValidChildren()).toBe(null);
  });
});
