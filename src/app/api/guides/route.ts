import * as z from "zod"

import { RequiresProPlanError } from "@/lib/exceptions"
import { auth } from "@/auth"
import * as service from "@/server/services/posts"

export async function GET() {
  try {
    const session = await auth();

    if (!session) {
      return new Response("Unauthorized", { status: 403 })
    }

    const { user } = session
    const posts = await service.getAllPosts(user)

    return new Response(JSON.stringify(posts))
  } catch (error) {
    return new Response(null, { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    const session = await auth();

    if (!session) {
      return new Response("Unauthorized", { status: 403 })
    }

    const { user } = session
    const post = await service.createPost({ user, req })

    return new Response(JSON.stringify(post))
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify(error.issues), { status: 422 })
    }

    if (error instanceof RequiresProPlanError) {
      return new Response("Requires Pro Plan", { status: 402 })
    }

    return new Response(null, { status: 500 })
  }
}
