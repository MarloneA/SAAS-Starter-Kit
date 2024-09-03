import * as z from "zod"

import { postPatchSchema } from "@/lib/validations/post"
import * as service from "@/server/services/posts"

const routeContextSchema = z.object({
  params: z.object({
    postId: z.string(),
  }),
})

export async function DELETE(
  req: Request,
  context: z.infer<typeof routeContextSchema>
) {
  try {
    // Validate the route params.
    const { params } = routeContextSchema.parse(context)
    const isAuthorized = await service.verifyCurrentUserHasAccessToPost(params.postId)

    // Check if the user has access to this post.
    if (!isAuthorized) {
      return new Response(null, { status: 403 })
    }

    // Delete the post.
    await service.deletePost({ params })

    return new Response(null, { status: 204 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify(error.issues), { status: 422 })
    }

    return new Response(null, { status: 500 })
  }
}

export async function PATCH(
  req: Request,
  context: z.infer<typeof routeContextSchema>
) {
  try {
    // Validate route params.
    const { params } = routeContextSchema.parse(context)
    const isAuthorized = await service.verifyCurrentUserHasAccessToPost(params.postId)

    // Check if the user has access to this post.
    if (!isAuthorized) {
      return new Response(null, { status: 403 })
    }

    // Get the request body and validate it.
    const json = await req.json()
    const body = postPatchSchema.parse(json)

    await service.update({ body, params })

    return new Response(null, { status: 200 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify(error.issues), { status: 422 })
    }

    return new Response(null, { status: 500 })
  }
}
