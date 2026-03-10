import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";
import { createAPIPage } from "fumadocs-openapi/ui";
import type { ComponentProps } from "react";
import { openmetadata, openmusic } from "@/scripts/openapi";

const OpenMusicAPIPage = createAPIPage(openmusic);
const OpenMetadataAPIPage = createAPIPage(openmetadata);
type APIPageProps = ComponentProps<typeof OpenMusicAPIPage>;

function APIPage({ document, ...props }: APIPageProps) {
  switch (document) {
    case "./public/openmusic.yml":
      return <OpenMusicAPIPage document={document} {...props} />;
    case "./public/openmetadata.yml":
      return <OpenMetadataAPIPage document={document} {...props} />;
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
