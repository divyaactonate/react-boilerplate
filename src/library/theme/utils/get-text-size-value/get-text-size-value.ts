import { BeautifySize } from '@library/theme/types';
import { textSizes as AllSizes } from '../../configs';
export function getTextSizeValue({
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
