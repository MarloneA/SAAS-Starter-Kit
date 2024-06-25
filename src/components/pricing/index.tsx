import { pricingCards } from "@/constants/landing-page";
import * as Layout from "../_ui/layout";
import { H2, P } from "../_ui/typography";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../_ui/card";
import Link from "next/link";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export const Pricing = () => {
  return (
    <Layout.Section>
      <section
        id="pricing"
        className="flex flex-col justify-center items-center gap-4 mt-10"
      >
        <H2>Choose your plan</H2>
        <P>
          Our straightforward pricing plans are tailored to meet your needs. If
          <br />
          {" you're"} not ready to commit you can get started for free.
        </P>
      </section>
      <div className="flex flex-wrap justify-center gap-4 mt-6">
        {pricingCards.map((card) => (
          <Card
            key={card.title}
            className={cn("w-[300px] flex flex-col justify-between", {
              "border-2 border-primary": card.title === "Unlimited",
            })}
          >
            <CardHeader>
              <CardTitle className="text-orange">{card.title}</CardTitle>
              <CardDescription>
                {pricingCards.find((c) => c.title === card.title)?.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <span className="font-bold text-4xl">{card.price}</span>
              <span className="text-muted-foreground">
                <span>/ month</span>
              </span>
            </CardContent>
            <CardFooter className="flex flex-col items-start gap-4">
              <div>
                {card.features.map((feature) => (
                  <div key={feature} className="flex gap-2">
                    <Check />
                    <p>{feature}</p>
                  </div>
                ))}
              </div>
              <Link
                href={`/pricing?plan=${card.title}`}
                className="border-2 border-orange bg-black p-2 rounded-md w-full font-bold text-center text-white"
              >
                Get Started
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </Layout.Section>
  );
};
