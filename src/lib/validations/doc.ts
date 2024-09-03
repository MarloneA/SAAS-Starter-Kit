import * as z from "zod"

export const docPatchSchema = z.object({
  title: z.string().min(3).max(128),
  published: z.boolean(),
  // TODO: Type this properly from editorjs block types?
  content: z.any().optional(),
})
