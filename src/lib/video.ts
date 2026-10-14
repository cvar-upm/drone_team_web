/** True for player URLs that must be embedded in an iframe (Vimeo, YouTube). */
export function isEmbedUrl(src: string): boolean {
  return (
    src.includes('player.vimeo.com') ||
    src.includes('youtube.com') ||
    src.includes('youtu.be') ||
    src.startsWith('https://player')
  );
}

export function videoType(src: string): string {
  if (src.endsWith('.webm')) return 'video/webm';
  if (src.endsWith('.ogg')) return 'video/ogg';
  return 'video/mp4';
}
