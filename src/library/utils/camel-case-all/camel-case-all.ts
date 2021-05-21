export function camelCaseAll(value: string | null) {
  return typeof value !== 'string'
    ? ''
    : value.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
}
