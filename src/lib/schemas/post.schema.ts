import { z } from "zod";

export const postCreateSchema = z.object({
  title: z.string(),
  content: z.string().optional(),
})

export const routeContextSchema = z.object({
  params: z.object({
    postId: z.string(),
  }),
})