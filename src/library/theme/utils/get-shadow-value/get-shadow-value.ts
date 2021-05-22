import { BeautifyShadow } from '@library/theme/types';
import { shadows as AllShadows } from '../../shadows';
export function getShadowValue({
  shadow,
  shadows,
  defaultValue = 'md',
}: {
  shadow: BeautifyShadow | null;
  shadows?: Record<BeautifyShadow | string, string>;
  defaultValue?: BeautifyShadow;
}) {
  if (!shadow) {
    return AllShadows[defaultValue];
  }
  if (shadows) {
    return shadows[shadow] || shadows[defaultValue];
  }

  return AllShadows[shadow] || AllShadows[shadow];
}
