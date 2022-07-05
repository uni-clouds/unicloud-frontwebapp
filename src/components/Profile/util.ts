export function renderData(data: string): string {
  console.log(data)
  return data === null || data === undefined ? '' : data
}
