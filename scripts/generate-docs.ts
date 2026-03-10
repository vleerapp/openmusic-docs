import { generateFiles } from "fumadocs-openapi";
import { openmetadata, openmusic } from "./openapi";

await generateFiles({
  input: openmusic,
  output: "./content/openmusic/endpoints",
  includeDescription: true,
});

await generateFiles({
  input: openmetadata,
  output: "./content/openmetadata/endpoints",
  includeDescription: true,
});
