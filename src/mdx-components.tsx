import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";
import { createAPIPage } from "fumadocs-openapi/ui";
import { openmetadata, openmusic } from "@/scripts/generate-docs";

const OpenMusicAPIPage = createAPIPage(openmusic);
const OpenMetadataAPIPage = createAPIPage(openmetadata);

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    OpenMusicAPIPage,
    OpenMetadataAPIPage,
    ...components,
  };
}
