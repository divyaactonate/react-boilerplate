import { BeautifyPadding } from '@library/theme/types';
import { paddings as AllPaddings } from '../../configs';
export function getPaddingValue({
  padding,
  paddings,
  defaultValue = 'md',
}: {
  padding: BeautifyPadding | null;
  paddings?: Record<BeautifyPadding | string | number, string>;
  defaultValue?: BeautifyPadding;
}) {
  if (!padding) {
    return AllPaddings[defaultValue];
  }
  if (paddings) {
    return paddings[padding] || paddings[defaultValue];
  }

  return AllPaddings[padding] || AllPaddings[padding];
}
