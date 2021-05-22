export const getStyleValue = (record: Record<string, any>, property: string) => {
  return record[property] || property;
};
