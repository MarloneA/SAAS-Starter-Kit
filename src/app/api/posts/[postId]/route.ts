import * as z from "zod";
import {
  deletePostHandler,
  publishPostHandler,
  updatePostHandler,
} from "@/server/controllers/posts";
import { routeContextSchema } from "@/lib/schemas/post.schema";

export async function DELETE(
  req: Request,
  context: z.infer<typeof routeContextSchema>
) {
  return await deletePostHandler(req, context);
}

export async function PUT(
  req: Request,
  context: z.infer<typeof routeContextSchema>
) {
  return await updatePostHandler(req, context);
}

export async function PATCH(
  req: Request,
  context: z.infer<typeof routeContextSchema>
) {
  return await publishPostHandler(req, context);
}
