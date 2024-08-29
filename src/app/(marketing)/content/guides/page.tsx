import { redirect } from "next/navigation";

import { db } from "@/lib/db";
import { EmptyPlaceholder } from "@/components/empty-placeholder";
import { DashboardHeader } from "@/components/header";
import { PostItem } from "@/components/post-item";
import { DashboardShell } from "@/components/shell";
import { auth } from "@/auth";
import { GuideCreateButton } from "@/components/guide-create-button";

export const metadata = {
  title: "Content Dashboard",
};

export default async function DashboardPage() {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  const posts = await db.guide.findMany({
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
      <DashboardHeader
        heading="Guides"
        text="Create and manage application specific guides."
      >
        <GuideCreateButton />
      </DashboardHeader>
      <div>
        {posts?.length ? (
          <div className="border rounded-md divide-y divide-border">
            {posts.map((post) => (
              <PostItem key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <EmptyPlaceholder>
            <EmptyPlaceholder.Icon name="post" />
            <EmptyPlaceholder.Title>No Guides created</EmptyPlaceholder.Title>
            <EmptyPlaceholder.Description>
              You don&apos;t have any guides yet. Start creating content.
            </EmptyPlaceholder.Description>
            <GuideCreateButton variant="outline" />
          </EmptyPlaceholder>
        )}
      </div>
    </DashboardShell>
  );
}
