import { createOpenAPI } from "fumadocs-openapi/server";

export const openmusic = createOpenAPI({
  input: ["./public/openmusic.yml"],
});

export const openmusicmetadata = createOpenAPI({
  input: ["./public/openmusicmetadata.yml"],
});
