import { Icons } from "@/components/_ui/icons";
import { Button } from "@/components/_ui/primitives/button";
import { TypographyDemo } from "@/components/_ui/typography/demo";

const DesignPage = () => {
  return (
    <div className="w-[1400px] m-auto">
      <h2 className="text-4xl font-bold">Typography</h2>
      <TypographyDemo />

      <h2 className="text-3xl font-bold mt-8">Color</h2>
      <Button variant="default">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      <Button variant="destructive">Destructive</Button>

      <div className="flex items-center">
        <Button size="sm">small</Button>
        <Button size="icon">
            <Icons.billing className="w-4 h-4" />
        </Button>
        <Button size="default">default</Button>
        <Button size="lg">large</Button>
      </div>

      <h2 className="text-3xl font-bold mt-8">Icons</h2>
      <h2 className="text-3xl font-bold mt-8">Buttons</h2>
    </div>
  );
};

export default DesignPage;
