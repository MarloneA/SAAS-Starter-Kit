import { z } from "zod";

export const guideCreateSchema = z.object({
  title: z.string(),
  content: z.string().optional(),
})

export const routeContextSchema = z.object({
  params: z.object({
    guideId: z.string(),
  }),
})