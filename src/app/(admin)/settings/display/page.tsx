import { Separator } from "@/components/_ui/primitives/separator";
import { DisplayForm } from "./display-form";

export default function SettingsDisplayPage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-medium text-lg">Display</h3>
        <p className="text-muted-foreground text-sm">
          Turn items on or off to control what&apos;s displayed in the app.
        </p>
      </div>
      <Separator />
      <DisplayForm />
    </div>
  );
}
