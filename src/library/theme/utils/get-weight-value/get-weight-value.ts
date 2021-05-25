import { BeautifyWeight } from '@library/theme/types';
import { weights as AllWeights } from '../../configs';
export function getWeightValue({
  weight,
  weights,
  defaultValue = 'normal',
}: {
  weight?: BeautifyWeight | null;
  weights?: Record<BeautifyWeight, any>;
  defaultValue?: BeautifyWeight;
}) {
  if (!weight) {
    return AllWeights[defaultValue];
  }
  if (weights) {
    return weights[weight] || weights[defaultValue];
  }

  return AllWeights[weight] || AllWeights[defaultValue];
}
