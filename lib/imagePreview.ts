export const imagePreview = (file: File) => {
  if (!file) return null

  return URL.createObjectURL(file)
}
