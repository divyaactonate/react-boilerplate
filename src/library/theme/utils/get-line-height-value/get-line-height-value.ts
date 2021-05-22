import { ActonateLineHeight } from '@library/theme/types';
import { lineHeights as LineHeights } from '../../line-height';
export function getLineHeightValue({
  lineHeight,
  lineHeights,
  defaultValue = 'normal',
}: {
  lineHeight: ActonateLineHeight | null;
  lineHeights?: Record<ActonateLineHeight, any>;
  defaultValue?: ActonateLineHeight;
}) {
  if (!lineHeight) {
    return LineHeights[defaultValue];
  }
  if (lineHeights) {
    return lineHeights[lineHeight] || lineHeights[defaultValue];
  }

  return LineHeights[lineHeight] || LineHeights[lineHeight];
}
