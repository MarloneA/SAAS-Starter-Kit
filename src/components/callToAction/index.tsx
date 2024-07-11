import { ArrowRight } from "lucide-react";
import { Badge } from "../_ui/badge";
import { Button } from "../_ui/button";
import { Section, Container } from "@/components/_ui/layout";
import Link from "next/link";

export const CallToAction = () => {
  return (
    <Section className="relative backdrop-blur-sm">
      <Container className="flex flex-col gap-8">
        <Badge className="w-fit not-prose" variant="outline">
          <Link className="flex items-center gap-1 group" href="/#pricing">
            Lorem ipsum dolor sit amet
            <ArrowRight className="group-hover:-rotate-45 w-4 transition-all" />
          </Link>
        </Badge>
        <h1 className="!mb-0">
          Building a saas should be about the product not the other stuff.
          that's where we come in?
        </h1>
        <h3 className="bg-muted/50 p-4 border rounded-md text-muted-foreground">
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </h3>

        <div className="flex gap-4">
          <Button>Get Started for free</Button>
          <Button variant="outline">Checkout the code</Button>
        </div>
      </Container>
    </Section>
  );
};
