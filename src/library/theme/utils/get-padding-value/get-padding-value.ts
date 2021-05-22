import { ActonateSize } from '@library/theme';
import { paddings as AllPaddings } from '../../paddings';
export function getPaddingValue({
  padding,
  paddings,
  defaultValue = 'md',
}: {
  padding: string | number | null;
  paddings?: Record<ActonateSize | string | number, string>;
  defaultValue?: string;
}) {
  if (!padding) {
    return AllPaddings[defaultValue];
  }
  if (paddings) {
    return paddings[padding] || paddings[defaultValue];
  }

  return AllPaddings[padding] || AllPaddings[padding];
}
