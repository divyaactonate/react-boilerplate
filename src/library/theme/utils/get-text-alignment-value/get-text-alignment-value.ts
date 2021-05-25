import { BeautifyTextAlignment } from '@library/theme/types';
import { alignments as AllAlignments } from '../../configs';
export function getAlignValue({
  align,
  aligns,
  defaultValue = 'left',
}: {
  align?: BeautifyTextAlignment | null;
  aligns?: Record<BeautifyTextAlignment, any>;
  defaultValue?: BeautifyTextAlignment;
}) {
  if (!align) {
    return AllAlignments[defaultValue];
  }
  if (aligns) {
    return aligns[align] || aligns[defaultValue];
  }

  return AllAlignments[align] || AllAlignments[defaultValue];
}
