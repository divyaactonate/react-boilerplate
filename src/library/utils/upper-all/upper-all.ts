export function upperAll(value: string | null) {
  return typeof value !== 'string' ? '' : value.toUpperCase();
}
