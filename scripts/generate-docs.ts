import { generateFiles } from "fumadocs-openapi";
import { openapi } from "@/src/lib/source";

void generateFiles({
  input: openapi,
  output: "./content/docs/api",
  includeDescription: true,
});
