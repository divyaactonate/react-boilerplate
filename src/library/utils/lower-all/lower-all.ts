export function lowerAll(value: string | null) {
  return typeof value !== 'string' ? '' : value.toLowerCase();
}
