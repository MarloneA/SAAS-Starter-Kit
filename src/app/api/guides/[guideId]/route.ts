import * as z from "zod"
import { routeContextSchema } from "@/lib/schemas/post.schema";
import { deleteGuideHandler, updateGuideHandler } from "@/server/controllers/guides";

export async function DELETE(
  req: Request,
  context: z.infer<typeof routeContextSchema>
) {
  return await deleteGuideHandler(req, context);
}

export async function PATCH(
  req: Request,
  context: z.infer<typeof routeContextSchema>
) {
  return await updateGuideHandler(req, context);
}
