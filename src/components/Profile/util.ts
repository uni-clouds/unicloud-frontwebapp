export function renderData(data: string): string {
  return data === null || data === undefined || data.length === 0 ? '-' : data
}
