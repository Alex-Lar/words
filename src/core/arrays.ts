export function getIntersection(firstArray: string[], secondArray: string[]): string[] {
  return firstArray.filter((el) => secondArray.includes(el))
}

export function getUnion(firstArray: string[], secondArray: string[]): string[] {
  return Array.from(new Set([...firstArray, ...secondArray]))
}
