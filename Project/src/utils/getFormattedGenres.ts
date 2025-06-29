export function getFormattedGenres(
  arr: string[],
  fn: { [key: string]: string },
  limit?: number
): string[] {
  const mapped = arr.map((item: string) => {
    return fn[item] || item;
  });

  return limit ? mapped.slice(0, limit) : mapped;
}
