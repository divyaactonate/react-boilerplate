import { ActonateSize } from '@library/theme';
import { shadows as AllShadows } from '../../shadows';
export function getShadowValue({
  shadow,
  shadows,
  defaultValue = 'md',
}: {
  shadow: string | number | null;
  shadows?: Record<ActonateSize | string, string>;
  defaultValue?: string;
}) {
  if (!shadow) {
    return AllShadows[defaultValue];
  }
  if (shadows) {
    return shadows[shadow] || shadows[defaultValue];
  }

  return AllShadows[shadow] || AllShadows[shadow];
}
