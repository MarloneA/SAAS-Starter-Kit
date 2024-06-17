import { Section, Container } from "@/components/_ui/layout";
import { ArrowRight } from "lucide-react";
import { Button } from "../_ui/button";
import { Badge } from "../_ui/badge";

import Link from "next/link";

const Hero = () => {
  return (
    <Section className="relative backdrop-blur-sm">
      <Container className="flex flex-col gap-8">
        <Badge className="not-prose w-fit" variant="outline">
          <Link className="group flex items-center gap-1" href="/#pricing">
            Lorem ipsum dolor sit amet
            <ArrowRight className="w-4 transition-all group-hover:-rotate-45" />
          </Link>
        </Badge>
        <h1 className="!mb-0">
          Building a saas should be about the product not the other stuff.
          that's where we come in?
        </h1>
        <h3 className="rounded-md border bg-muted/50 p-4 text-muted-foreground">
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

export default Hero;
