export const setHeaderFormat = (header: string[]) => {
  const headerFormated = header.map(h => {
    return {
      title: h.toUpperCase(),
      key: h,
    }
  })
  return headerFormated
}
