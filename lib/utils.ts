export function getAssetPath(path: string): string {
  const basePath = process.env.NODE_ENV === 'production' ? '/prisca22-website' : ''
  return `${basePath}${path}`
}
