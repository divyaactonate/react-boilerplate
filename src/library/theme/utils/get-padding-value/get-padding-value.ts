import { ActonatePadding } from '@library/theme/types';
import { paddings as AllPaddings } from '../../paddings';
export function getPaddingValue({
  padding,
  paddings,
  defaultValue = 'md',
}: {
  padding: ActonatePadding | null;
  paddings?: Record<ActonatePadding | string | number, string>;
  defaultValue?: ActonatePadding;
}) {
  if (!padding) {
    return AllPaddings[defaultValue];
  }
  if (paddings) {
    return paddings[padding] || paddings[defaultValue];
  }

  return AllPaddings[padding] || AllPaddings[padding];
}
