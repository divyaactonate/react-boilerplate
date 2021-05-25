import { borderWidths as AllBorderWidhts } from '../../configs';
export function getBorderWidthValue({
  thickness,
  borders,
  defaultValue = 'md',
}: {
  thickness?: string | null;
  borders?: Record<string, any>;
  defaultValue?: string;
}) {
  if (!thickness) {
    return AllBorderWidhts[defaultValue];
  }
  if (borders) {
    return AllBorderWidhts[thickness] || AllBorderWidhts[defaultValue];
  }

  return AllBorderWidhts[thickness] || AllBorderWidhts[thickness];
}
