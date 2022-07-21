export function checkTypeValue(value: string | number) {
  if (typeof value === 'number') {
    const valueToString = value.toString().toLocaleLowerCase()
    return valueToString
  }
  if (typeof value === 'string') {
    const valueToLowerCase = value.toLocaleLowerCase()
    return valueToLowerCase
  }
  return
}
