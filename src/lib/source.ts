import { docs } from '@/.source';
import { type InferPageType, loader } from 'fumadocs-core/source';
import { Icon } from '@iconify/react';
import { createElement } from 'react';

export const source = loader({
  baseUrl: '/',
  source: docs.toFumadocsSource(),
  icon(icon) {
    if (!icon) return;

    // iconpack:iconname
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

