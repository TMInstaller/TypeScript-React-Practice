// 292p useToggle 커스텀 훅 구현하기
import { useState, useCallback } from 'react'

export const useToggle = (
  initialChecked: boolean = false
): [boolean, () => void] => {
  const [checked, setChecked] = useState<boolean>(initialChecked)
  const toggleChecked = useCallback(() => setChecked((checked) => !checked), [])
  return [checked, toggleChecked]
}
