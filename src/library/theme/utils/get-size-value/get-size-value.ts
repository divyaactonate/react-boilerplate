import { sizes as AllSizes } from '../../sizes';
export function getSizeValue({
  size,
  sizes,
  defaultValue = 'md',
}: {
  size: string | number | null;
  sizes?: Record<string, any>;
  defaultValue?: string;
}) {
  if (!size) {
    return AllSizes[defaultValue];
  }
  if (sizes) {
    return sizes[size] || sizes[defaultValue];
  }

  return AllSizes[size] || AllSizes[defaultValue];
}
