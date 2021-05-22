import { BeautifyLineHeight } from '@library/theme/types';
import { lineHeights as LineHeights } from '../../line-height';
export function getLineHeightValue({
  lineHeight,
  lineHeights,
  defaultValue = 'normal',
}: {
  lineHeight: BeautifyLineHeight | null;
  lineHeights?: Record<BeautifyLineHeight, any>;
  defaultValue?: BeautifyLineHeight;
}) {
  if (!lineHeight) {
    return LineHeights[defaultValue];
  }
  if (lineHeights) {
    return lineHeights[lineHeight] || lineHeights[defaultValue];
  }

  return LineHeights[lineHeight] || LineHeights[lineHeight];
}
