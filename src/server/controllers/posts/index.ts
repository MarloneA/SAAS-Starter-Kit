import { auth } from "@/auth";
import { RequiresProPlanError } from "@/lib/exceptions";
import { postCreateSchema, routeContextSchema } from "@/lib/schemas/post.schema";
import { postPatchSchema } from "@/lib/validations/post";
import { PostService } from "@/server/services/posts";
import { z } from "zod";

export async function getPostsHandler() {
  try {
    const session = await auth();

    if (!session) {
      return new Response("Unauthorized", { status: 403 });
    }

    const posts = await PostService.getPostsByUserId(session.user.id);

    return new Response(JSON.stringify(posts));
  } catch (error) {
    return new Response(null, { status: 500 });
  }
}

export async function createPostHandler(req: Request) {
  try {
    const session = await auth();

    if (!session) {
      return new Response("Unauthorized", { status: 403 });
    }

    const { user } = session;
    const json = await req.json();
    const body = postCreateSchema.parse(json);

    const post = await PostService.createPost(user.id, body);

    return new Response(JSON.stringify(post));
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

export async function deletePostHandler(
  req: Request,
  context: z.infer<typeof routeContextSchema>
) {
  try {
    // Validate the route params.
    const { params } = routeContextSchema.parse(context);

    // Call the service to handle the deletion.
    await PostService.deletePost(params.postId);

    return new Response(null, { status: 204 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify(error.issues), { status: 422 });
    }

    return new Response(null, { status: 500 });
  }
}

export async function updatePostHandler(
  req: Request,
  context: z.infer<typeof routeContextSchema>
) {
  try {
    // Validate route params.
    const { params } = routeContextSchema.parse(context);

    // Get the request body and validate it.
    const json = await req.json();
    const body = postPatchSchema.parse(json);

    // Call the service to update the post.
    await PostService.updatePost(params.postId, body);

    return new Response(null, { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify(error.issues), { status: 422 });
    }

    return new Response(null, { status: 500 });
  }
}

