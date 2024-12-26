import { notFound, redirect } from "next/navigation";
import { User, Doc } from "@prisma/client";
import { db } from "@/lib/db";
import { Editor } from "@/components/widgets/editor";
import { auth } from "@/auth";

async function getPostForUser(docId: Doc["id"], userId: User["id"]) {
  return await db.doc.findFirst({
    where: {
      id: docId,
      authorId: userId,
    },
  });
}

interface EditorPageProps {
  params: { docId: string };
}

export default async function EditorPage({ params }: EditorPageProps) {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  const post = await getPostForUser(params.docId, session.user.id);

  if (!post) {
    notFound();
  }

  return (
    <Editor
      type="docs"
      content={{
        id: post.id,
        title: post.title,
        content: post.content,
        published: post.published,
      }}
    />
  );
}
