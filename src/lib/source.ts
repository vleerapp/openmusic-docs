import { docs } from '@/.source';
import { type InferPageType, loader } from 'fumadocs-core/source';
import { Icon } from '@iconify/react';
import { createElement } from 'react';

// See https://fumadocs.dev/docs/headless/source-api for more info
export const source = loader({
  baseUrl: '/',
  source: docs.toFumadocsSource(),
  icon(icon) {
    if (!icon) return;

    // Iconify icons should be in format "prefix:icon-name"
    // For example: "lucide:home", "mdi:account"
    // Browse icons at https://icon-sets.iconify.design/
    if (!icon.includes(':')) {
      console.warn(
        `[iconify] Icon name "${icon}" should be in format "prefix:icon-name". ` +
        `For example: "lucide:home", "mdi:account". Visit https://icon-sets.iconify.design/`
      );
      return;
    }

    return createElement(Icon, { icon });
  },
});

export function getPageImage(page: InferPageType<typeof source>) {
  const segments = [...page.slugs, 'image.png'];

  return {
    segments,
    url: `/og/docs/${segments.join('/')}`,
  };
}

