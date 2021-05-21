export function getSizeValue({
  size,
  sizes,
  defaultSize = 'md',
}: {
  size: string | number | null;
  sizes: Record<string, any>;
  defaultSize?: string;
}) {
  if (!size) {
    return sizes[defaultSize];
  }
  if (typeof size === 'number') {
    return size;
  }

  return sizes[size] || size || sizes[defaultSize];
}
