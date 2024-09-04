import * as z from "zod"
import { routeContextSchema } from "@/lib/schemas/post.schema";
import { deleteDocHandler, updateDocHandler } from "@/server/controllers/docs";

export async function DELETE(
  req: Request,
  context: z.infer<typeof routeContextSchema>
) {
  return await deleteDocHandler(req, context);
}

export async function PATCH(
  req: Request,
  context: z.infer<typeof routeContextSchema>
) {
  return await updateDocHandler(req, context);
}
