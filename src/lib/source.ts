import { docs } from "fumadocs-mdx:collections/server";
import { type InferPageType, loader } from "fumadocs-core/source";
import { createElement } from "react";
import { createOpenAPI, openapiPlugin } from "fumadocs-openapi/server";
import { Icon } from "@iconify/react";

export const openapi = createOpenAPI({
  input: ["./public/openapi.yml"],
});

export const source = loader({
  baseUrl: "/",
  source: docs.toFumadocsSource(),
  icon(icon) {
    if (!icon) return;
    return createElement(Icon, { icon });
  },
  plugins: [openapiPlugin()],
});

export function getPageImage(page: InferPageType<typeof source>) {
  const segments = [...page.slugs, "image.png"];

  return {
    segments,
    url: `/og/docs/${segments.join("/")}`,
  };
}

export async function getLLMText(page: InferPageType<typeof source>) {
  const processed = await page.data.getText("processed");

  return `# ${page.data.title}

${processed}`;
}
