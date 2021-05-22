import { ActonateTextAlignment } from '@library/theme/types';
import { alignments as AllAlignments } from '../../text-alignments';
export function getAlignValue({
  align,
  aligns,
  defaultValue = 'left',
}: {
  align?: ActonateTextAlignment | null;
  aligns?: Record<ActonateTextAlignment, any>;
  defaultValue?: ActonateTextAlignment;
}) {
  if (!align) {
    return AllAlignments[defaultValue];
  }
  if (aligns) {
    return aligns[align] || aligns[defaultValue];
  }

  return AllAlignments[align] || AllAlignments[defaultValue];
}
