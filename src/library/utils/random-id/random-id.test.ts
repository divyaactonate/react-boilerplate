import { randomId } from './random-id';

describe('@beautify/utils/random-id', () => {
  it('returns random id with beautify- prefix', () => {
    expect(randomId().includes('beautify-')).toBe(true);
    expect(randomId()).toHaveLength(17);
  });
});
