import { Section, Container } from "../_ui/layout";
import Image from "next/image";
import Link from "next/link";
import Balancer from "react-wrap-balancer";
import { Button } from "../_ui/button";
import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { H2 } from "../_ui/typography";

export default function Footer() {
  return (
    <footer>
      <Section>
        <Container className="gap-12 grid md:grid-cols-[1.5fr_0.5fr_0.5fr]">
          <div className="flex flex-col gap-6 not-prose">
            <Link href="/">
              <H2>saas kit</H2>
            </Link>
            <p>
              <Balancer>
                Saas kit is a collection of Next.js, React, Typescript
                components for bootstraping your next saas application.
              </Balancer>
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h5>Website</h5>
            <Link href="/">Home</Link>
            <Link href="/">Features</Link>
            <Link href="/">Pricing</Link>
          </div>
          <div className="flex flex-col gap-2">
            <h5>Legal</h5>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
            <Link href="/cookie-policy">Cookie Policy</Link>
          </div>
        </Container>
        <Container className="flex md:flex-row flex-col justify-between md:items-center gap-6 md:gap-2 border-t not-prose">
          <div className="flex gap-2">
            <Button variant="outline" size="icon">
              <GitHubLogoIcon />
            </Button>
            <Button variant="outline" size="icon">
              <TwitterLogoIcon />
            </Button>
            <Button variant="outline" size="icon">
              <EnvelopeClosedIcon />
            </Button>
          </div>
          <p className="text-muted-foreground">
            © <a href="#">Saas kit</a>. All rights reserved. 2024.
          </p>
        </Container>
      </Section>
    </footer>
  );
}
