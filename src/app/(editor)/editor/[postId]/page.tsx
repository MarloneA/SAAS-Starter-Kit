import { notFound, redirect } from "next/navigation";
import { Post, User } from "@prisma/client";
import { db } from "@/lib/db";
import { Editor } from "@/components/widgets/editor";
import { auth } from "@/auth";

async function getPostForUser(postId: Post["id"], userId: User["id"]) {
  return await db.post.findFirst({
    where: {
      id: postId,
      authorId: userId,
    },
  });
}

interface EditorPageProps {
  params: { postId: string };
}

export default async function EditorPage({ params }: EditorPageProps) {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  const post = await getPostForUser(params.postId, session.user.id);

  if (!post) {
    notFound();
  }

  return (
    <Editor
      post={{
        id: post.id,
        title: post.title,
        content: post.content,
        published: post.published,
      }}
    />
  );
}
