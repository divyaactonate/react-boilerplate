import { ActonateWeight } from '@library/theme/types';
import { weights as AllWeights } from '../../weight';
export function getWeightValue({
  weight,
  weights,
  defaultValue = 'normal',
}: {
  weight?: ActonateWeight | null;
  weights?: Record<ActonateWeight, any>;
  defaultValue?: ActonateWeight;
}) {
  if (!weight) {
    return AllWeights[defaultValue];
  }
  if (weights) {
    return weights[weight] || weights[defaultValue];
  }

  return AllWeights[weight] || AllWeights[defaultValue];
}
