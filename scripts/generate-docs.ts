import { generateFiles } from "fumadocs-openapi";
import { createOpenAPI } from "fumadocs-openapi/server";

export const openmusic = createOpenAPI({
  input: ["./public/openmusic.yml"],
});

export const openmetadata = createOpenAPI({
  input: ["./public/openmetadata.yml"],
});

void generateFiles({
  input: openmusic,
  output: "./content/openmusic/endpoints",
  includeDescription: true,
});

void generateFiles({
  input: openmetadata,
  output: "./content/openmetadata/endpoints",
  includeDescription: true,
});
