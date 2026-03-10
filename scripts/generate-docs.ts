import { generateFiles } from "fumadocs-openapi";
import { openmusicmetadata, openmusic } from "./openapi";

await generateFiles({
  input: openmusic,
  output: "./content/openmusic/endpoints",
  includeDescription: true,
});

await generateFiles({
  input: openmusicmetadata,
  output: "./content/openmusicmetadata/endpoints",
  includeDescription: true,
});
