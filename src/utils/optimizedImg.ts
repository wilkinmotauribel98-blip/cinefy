export function optimizedImg(src:string, w:number, h:number): string {
  if (!src) return '';
  return `https://wsrv.nl/?url=${encodeURIComponent(src)}&w=${w}&h=${h}&fit=cover&q=80`;
}