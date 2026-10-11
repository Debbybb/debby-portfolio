export const capitalize = (str: string) => {
  if (!str) return ''
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export function formatNumberPadStart(num: number) {
  return String(num).padStart(2, '0')
}