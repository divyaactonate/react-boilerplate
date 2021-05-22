import { ActonateCase } from '@library/theme/types';
import { transforms as AllTransforms } from '../../transform';
export function getTransformValue({
  transform,
  transforms,
  defaultValue = 'normal-case',
}: {
  transform?: ActonateCase;
  transforms?: Record<ActonateCase, any>;
  defaultValue?: ActonateCase;
}) {
  if (!transform) {
    return AllTransforms[defaultValue];
  }
  if (transforms) {
    return transforms[transform] || transforms[defaultValue];
  }

  return AllTransforms[transform] || AllTransforms[defaultValue];
}
