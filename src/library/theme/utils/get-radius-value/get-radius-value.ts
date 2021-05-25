import { BeautifySize } from '@library/theme/types';
import { radii as AllRadius } from '../../configs';
export function getRadiusValue({
  radius,
  radii,
  defaultValue = 'md',
}: {
  radius: BeautifySize | null;
  radii?: Record<BeautifySize, any>;
  defaultValue?: BeautifySize;
}) {
  if (!radius) {
    return AllRadius[defaultValue];
  }
  if (radii) {
    return radii[radius] || radii[defaultValue];
  }

  return AllRadius[radius] || AllRadius[radius];
}
