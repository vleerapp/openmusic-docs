import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";
import { createAPIPage } from "fumadocs-openapi/ui";
import type { ComponentProps } from "react";
import { openmusicmetadata, openmusic } from "@/scripts/openapi";

const OpenMusicAPIPage = createAPIPage(openmusic);
const OpenMusicMetadataAPIPage = createAPIPage(openmusicmetadata);
type APIPageProps = ComponentProps<typeof OpenMusicAPIPage>;

function APIPage({ document, ...props }: APIPageProps) {
  switch (document) {
    case "./public/openmusic.yml":
      return <OpenMusicAPIPage document={document} {...props} />;
    case "./public/openmusicmetadata.yml":
      return <OpenMusicMetadataAPIPage document={document} {...props} />;
    default:
      throw new Error(`Unsupported OpenAPI document: ${document}`);
  }
}

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    APIPage,
    ...components,
  };
}
