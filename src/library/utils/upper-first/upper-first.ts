export function upperFirst(value: string | null) {
  return typeof value !== 'string' ? '' : value.charAt(0).toUpperCase() + value.slice(1);
}
