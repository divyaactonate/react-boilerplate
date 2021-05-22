import { ActonateShadow } from '@library/theme/types';
import { shadows as AllShadows } from '../../shadows';
export function getShadowValue({
  shadow,
  shadows,
  defaultValue = 'md',
}: {
  shadow: ActonateShadow | null;
  shadows?: Record<ActonateShadow | string, string>;
  defaultValue?: ActonateShadow;
}) {
  if (!shadow) {
    return AllShadows[defaultValue];
  }
  if (shadows) {
    return shadows[shadow] || shadows[defaultValue];
  }

  return AllShadows[shadow] || AllShadows[shadow];
}
