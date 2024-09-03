import { CardSkeleton } from "@/components/widgets/card-skeleton";
import { DashboardHeader } from "@/components/widgets/header";
import { DashboardShell } from "@/components/widgets/shell";

export default function DashboardBillingLoading() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Billing"
        text="Manage billing and your subscription plan."
      />
      <div className="grid gap-10">
        <CardSkeleton />
      </div>
    </DashboardShell>
  );
}
