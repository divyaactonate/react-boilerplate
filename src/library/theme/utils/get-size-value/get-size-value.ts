import { BeautifySize } from '@library/theme/types';
import { sizes as Allsizes } from '../../configs';
export function getsizeValue({
  size,
  sizes,
  defaultValue = 'md',
}: {
  size?: BeautifySize | null;
  sizes?: Record<BeautifySize, any>;
  defaultValue?: BeautifySize;
}) {
  if (!size) {
    return Allsizes[defaultValue];
  }
  if (sizes) {
    return sizes[size] || sizes[defaultValue];
  }

  return Allsizes[size] || Allsizes[defaultValue];
}
