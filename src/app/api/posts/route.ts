import { createPostHandler, getPostsHandler } from "@/server/controllers/posts";

export async function GET() {
  return await getPostsHandler();
}

export async function POST(req: Request) {
  return await createPostHandler(req);
}
