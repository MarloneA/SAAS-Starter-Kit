import { auth } from "@/auth";
import { db } from "./db";

export async function verifyCurrentUserHasAccessToPost(
  postId: string
): Promise<boolean> {
  const session = await auth();
  const count = await db.post.count({
    where: {
      id: postId,
      authorId: session?.user.id,
    },
  });

  return count > 0;
}

export async function verifyCurrentUserHasAccessToGuide(
  guideId: string
): Promise<boolean> {
  const session = await auth();
  const count = await db.guide.count({
    where: {
      id: guideId,
      authorId: session?.user.id,
    },
  });

  return count > 0;
}

export async function verifyCurrentUserHasAccessToDoc(
  docId: string
): Promise<boolean> {
  const session = await auth();
  const count = await db.doc.count({
    where: {
      id: docId,
      authorId: session?.user.id,
    },
  });

  return count > 0;
}
