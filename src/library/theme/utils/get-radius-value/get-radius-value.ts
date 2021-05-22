import { ActonateSize } from '@library/theme/types';
import { radii as AllRadius } from '../../radius';
export function getRadiusValue({
  radius,
  radii,
  defaultValue = 'md',
}: {
  radius: ActonateSize | null;
  radii?: Record<ActonateSize, any>;
  defaultValue?: ActonateSize;
}) {
  if (!radius) {
    return AllRadius[defaultValue];
  }
  if (radii) {
    return radii[radius] || radii[defaultValue];
  }

  return AllRadius[radius] || AllRadius[radius];
}
