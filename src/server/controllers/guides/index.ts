import { auth } from "@/auth";
import { RequiresProPlanError } from "@/lib/exceptions";
import { guideCreateSchema, routeContextSchema } from "@/lib/schemas/guide.schema";
import { guidePatchSchema } from "@/lib/validations/guide";
import { GuideService } from "@/server/services/guides";
import { z } from "zod";

export async function getGuidesHandler() {
  try {
    const session = await auth();

    if (!session) {
      return new Response("Unauthorized", { status: 403 });
    }

    const guides = await GuideService.getGuidesByUserId(session.user.id);

    return new Response(JSON.stringify(guides));
  } catch (error) {
    return new Response(null, { status: 500 });
  }
}

export async function createGuideHandler(req: Request) {
  try {
    const session = await auth();

    if (!session) {
      return new Response("Unauthorized", { status: 403 });
    }

    const { user } = session;
    const json = await req.json();
    const body = guideCreateSchema.parse(json);

    const guide = await GuideService.createGuide(user.id, body);

    return new Response(JSON.stringify(guide));
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

export async function deleteGuideHandler(
  req: Request,
  context: z.infer<typeof routeContextSchema>
) {
  try {
    // Validate the route params.
    const { params } = routeContextSchema.parse(context);

    // Call the service to handle the deletion.
    await GuideService.deleteGuide(params.guideId);

    return new Response(null, { status: 204 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify(error.issues), { status: 422 });
    }

    return new Response(null, { status: 500 });
  }
}

export async function updateGuideHandler(
  req: Request,
  context: z.infer<typeof routeContextSchema>
) {
  try {
    // Validate route params.
    const { params } = routeContextSchema.parse(context);

    // Get the request body and validate it.
    const json = await req.json();
    const body = guidePatchSchema.parse(json);

    // Call the service to update the guide.
    await GuideService.updateGuide(params.guideId, body);

    return new Response(null, { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify(error.issues), { status: 422 });
    }

    return new Response(null, { status: 500 });
  }
}

