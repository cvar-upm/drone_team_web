import type { ImageMetadata } from 'astro';

// Every raster image under src/assets, keyed by its path relative to that folder ("/imav25/imav.jpeg").
const modules = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/**/*.{png,jpg,jpeg,JPG,JPEG,PNG,webp}',
  { eager: true },
);

const images = new Map(
  Object.entries(modules).map(([key, mod]) => [key.replace('/src/assets', ''), mod.default]),
);

/** Resolve a path like "/members/rafa.jpeg" to an optimisable image. Fails the build if it doesn't exist. */
export function resolveImage(path: string): ImageMetadata {
  const key = path.startsWith('/') ? path : `/${path}`;
  const image = images.get(key);
  if (!image) {
    throw new Error(`Image not found: "${path}". Put it in src/assets${key} (paths are case-sensitive).`);
  }
  return image;
}
