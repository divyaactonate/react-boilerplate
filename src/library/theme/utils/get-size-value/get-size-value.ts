import { ActonateSize } from '@library/theme/types';
import { sizes as AllSizes } from '../../sizes';
export function getSizeValue({
  size,
  sizes,
  defaultValue = 'md',
}: {
  size: ActonateSize | null;
  sizes?: Record<ActonateSize, any>;
  defaultValue?: ActonateSize;
}) {
  if (!size) {
    return AllSizes[defaultValue];
  }
  if (sizes) {
    return sizes[size] || sizes[defaultValue];
  }

  return AllSizes[size] || AllSizes[defaultValue];
}
