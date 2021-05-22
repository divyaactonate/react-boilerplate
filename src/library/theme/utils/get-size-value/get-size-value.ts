import { BeautifySize } from '@library/theme/types';
import { sizes as AllSizes } from '../../sizes';
export function getSizeValue({
  size,
  sizes,
  defaultValue = 'md',
}: {
  size: BeautifySize | string | null;
  sizes?: Record<BeautifySize | string, any>;
  defaultValue?: BeautifySize;
}) {
  if (!size) {
    return AllSizes[defaultValue];
  }
  if (sizes) {
    return sizes[size] || sizes[defaultValue];
  }

  return AllSizes[size] || AllSizes[defaultValue];
}
