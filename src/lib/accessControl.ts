import { auth } from "@/auth";
import { db } from "./db";

export async function verifyCurrentUserHasAccessToPost(postId: string): Promise<boolean> {
  const session = await auth();
  const count = await db.post.count({
    where: {
      id: postId,
      authorId: session?.user.id,
    },
  });

  return count > 0;
}
