import { auth } from "@/auth";
import { RequiresProPlanError } from "@/lib/exceptions";
import { docCreateSchema, routeContextSchema } from "@/lib/schemas/doc.schema";
import { docPatchSchema } from "@/lib/validations/doc";
import { DocService } from "@/server/services/docs";
import { z } from "zod";

export async function getDocsHandler() {
  try {
    const session = await auth();

    if (!session) {
      return new Response("Unauthorized", { status: 403 });
    }

    const docs = await DocService.getDocsByUserId(session.user.id);

    return new Response(JSON.stringify(docs));
  } catch (error) {
    return new Response(null, { status: 500 });
  }
}

export async function createDocHandler(req: Request) {
  try {
    const session = await auth();

    if (!session) {
      return new Response("Unauthorized", { status: 403 });
    }

    const { user } = session;
    const json = await req.json();
    const body = docCreateSchema.parse(json);

    const doc = await DocService.createDoc(user.id, body);

    return new Response(JSON.stringify(doc));
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify(error.issues), { status: 422 });
    }

    if (error instanceof RequiresProPlanError) {
      return new Response("Requires Pro Plan", { status: 402 });
    }

    return new Response(null, { status: 500 });
  }
}

export async function deleteDocHandler(
  req: Request,
  context: z.infer<typeof routeContextSchema>
) {
  try {
    // Validate the route params.
    const { params } = routeContextSchema.parse(context);

    // Call the service to handle the deletion.
    await DocService.deleteDoc(params.docId);

    return new Response(null, { status: 204 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify(error.issues), { status: 422 });
    }

    return new Response(null, { status: 500 });
  }
}

export async function updateDocHandler(
  req: Request,
  context: z.infer<typeof routeContextSchema>
) {
  try {
    // Validate route params.
    const { params } = routeContextSchema.parse(context);

    // Get the request body and validate it.
    const json = await req.json();
    const body = docPatchSchema.parse(json);

    // Call the service to update the doc.
    await DocService.updateDoc(params.docId, body);

    return new Response(null, { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify(error.issues), { status: 422 });
    }

    return new Response(null, { status: 500 });
  }
}

