import { createOpenAPI } from "fumadocs-openapi/server";

export const openmusic = createOpenAPI({
  input: ["./public/openmusic.yml"],
});

export const openmetadata = createOpenAPI({
  input: ["./public/openmetadata.yml"],
});
