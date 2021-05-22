import { radii as AllRadius } from '../../radius';
export function getRadiusValue({
  radius,
  radii,
  defaultValue = 'md',
}: {
  radius: string | number | null;
  radii?: Record<string, any>;
  defaultValue?: string;
}) {
  if (!radius) {
    return AllRadius[defaultValue];
  }
  if (radii) {
    return radii[radius] || radii[defaultValue];
  }

  return AllRadius[radius] || AllRadius[radius];
}
