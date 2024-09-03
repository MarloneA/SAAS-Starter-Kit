import { DashboardHeader } from "@/components/widgets/header";
import { PostCreateButton } from "@/components/widgets/post-create-button";
import { PostItem } from "@/components/widgets/post-item";
import { DashboardShell } from "@/components/widgets/shell";

export default function DashboardLoading() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Posts" text="Create and manage posts.">
        <PostCreateButton />
      </DashboardHeader>
      <div className="divide-border-200 divide-y rounded-md border">
        <PostItem.Skeleton />
        <PostItem.Skeleton />
        <PostItem.Skeleton />
        <PostItem.Skeleton />
        <PostItem.Skeleton />
      </div>
    </DashboardShell>
  );
}
