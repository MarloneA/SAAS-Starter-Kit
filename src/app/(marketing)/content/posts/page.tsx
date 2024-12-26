import { redirect } from "next/navigation";

import { db } from "@/lib/db";
import { EmptyPlaceholder } from "@/components/widgets/empty-placeholder";
import { DashboardHeader } from "@/components/widgets/header";
import { PostCreateButton } from "@/components/widgets/post-create-button";
import { PostItem } from "@/components/widgets/post-item";
import { DashboardShell } from "@/components/widgets/shell";
import { auth } from "@/auth";

export const metadata = {
  title: "Content Dashboard",
};

export default async function DashboardPage() {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  const posts = await db.post.findMany({
    where: {
      authorId: session.user.id,
    },
    select: {
      id: true,
      title: true,
      published: true,
      createdAt: true,
    },
    orderBy: {
      updatedAt: "desc",
    },
  });

  return (
    <DashboardShell>
      <DashboardHeader heading="Posts" text="Create and manage posts.">
        <PostCreateButton />
      </DashboardHeader>
      <div>
        {posts?.length ? (
          <div className="border rounded-md divide-y divide-border">
            {posts.map((post) => (
              <PostItem key={post.id} post={post} type="posts" />
            ))}
          </div>
        ) : (
          <EmptyPlaceholder>
            <EmptyPlaceholder.Icon name="post" />
            <EmptyPlaceholder.Title>No posts created</EmptyPlaceholder.Title>
            <EmptyPlaceholder.Description>
              You don&apos;t have any posts yet. Start creating content.
            </EmptyPlaceholder.Description>
            <PostCreateButton variant="outline" />
          </EmptyPlaceholder>
        )}
      </div>
    </DashboardShell>
  );
}
