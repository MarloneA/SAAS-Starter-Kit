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
            Buy Product
            <ArrowRight className="group-hover:-rotate-45 w-4 transition-all" />
          </Link>
        </Badge>
        <h1 className="!mb-0">
          There is alot that goes on behind the scenes when building an
          application. Don't leave it all to chance.
        </h1>
        <h3 className="bg-muted/50 p-4 border rounded-md text-muted-foreground">
          Get Started with a high quality product that will sky rocket your
          productivity and allow you to test and iterate on your ideas quickly.
          Remember alot of startups take too much time to go to market in the
          initial stages due to unforseen overhead of building the required
          structure to support your idea. With this starter kit, you don't have
          to waste time at all. Get started immediately. What are you waiting
          for?
        </h3>

        <div className="flex gap-4">
          <Button>Get Started for free</Button>
          <Button variant="outline">Checkout the demo</Button>
        </div>
      </Container>
    </Section>
  );
};
