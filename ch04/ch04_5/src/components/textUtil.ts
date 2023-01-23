// 162p 유틸리티 함수 구현하기
export const makeClassName = (
  setting: string,
  _className?: string,
  numberOfLines?: number
) =>
  [
    setting,
    numberOfLines ? `ling-clamp-${numberOfLines}` : '',
    _className,
  ].join(' ')
