// 271p useOrCreate 함수 구현하기
const cache: Record<string, any> = {}

export const useOrCreate = <T>(key: string, callback: () => T): T => {
  if (!cache[key]) cache[key] = callback()
  return cache[key] as T
}
