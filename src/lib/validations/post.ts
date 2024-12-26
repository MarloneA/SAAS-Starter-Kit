import * as z from "zod";

export const postPatchSchema = z.object({
  title: z.string().min(3).max(128),
  published: z.boolean(),
  // TODO: Type this properly from editorjs block types?
  content: z.any().optional(),
});

export const postPublishSchem = z.object({
  published: z.boolean(),
});
