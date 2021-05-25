import { BeautifyCase } from '@library/theme/types';
import { transforms as AllTransforms } from '../../configs';
export function getTransformValue({
  transform,
  transforms,
  defaultValue = 'normal-case',
}: {
  transform?: BeautifyCase;
  transforms?: Record<BeautifyCase, any>;
  defaultValue?: BeautifyCase;
}) {
  if (!transform) {
    return AllTransforms[defaultValue];
  }
  if (transforms) {
    return transforms[transform] || transforms[defaultValue];
  }

  return AllTransforms[transform] || AllTransforms[defaultValue];
}
