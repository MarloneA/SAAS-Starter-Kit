import * as z from "zod";
import { routeContextSchema } from "@/lib/schemas/guide.schema";
import {
  deleteGuideHandler,
  updateGuideHandler,
  publishGuideHandler,
} from "@/server/controllers/guides";

export async function DELETE(
  req: Request,
  context: z.infer<typeof routeContextSchema>
) {
  return await deleteGuideHandler(req, context);
}

export async function PUT(
  req: Request,
  context: z.infer<typeof routeContextSchema>
) {
  return await updateGuideHandler(req, context);
}

export async function PATCH(
  req: Request,
  context: z.infer<typeof routeContextSchema>
) {
  return await publishGuideHandler(req, context);
}
